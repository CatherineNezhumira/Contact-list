import {combineReducers} from 'redux'
import {ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT, RECEIVE_CONTACTS} from '../constants/ActionNames.js'
import errorReducer from './ErrorHandler'


const initialState = {
    searchData: [],
    errorMessage: ''
};

function contactReducer(state = initialState.searchData, action) {
    switch (action.type) {
        case ADD_CONTACT:
            return [...state, action.contact];
        case DELETE_CONTACT:
            const contactIdToDelete = state.indexOf(state.find((contact) => contact.id === action.contactId));
            state.splice(contactIdToDelete, 1);
            return Array.from(state);
        case EDIT_CONTACT:
            const newState = Array.from(state);
            const contactToEdit = newState.find((contact) => contact.id === action.newContactData.id);
            Object.assign(contactToEdit, action.newContactData);
            return newState;
        case RECEIVE_CONTACTS:
            return action.contacts;
        default:
            return state;
    }

}

const reducer = combineReducers({searchData: contactReducer, errorMessage: errorReducer});

export default reducer;