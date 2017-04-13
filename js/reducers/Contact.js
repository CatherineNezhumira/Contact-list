import {combineReducers} from 'redux'
import {ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT, RECEIVE_CONTACTS} from '../constants/ActionNames.js'


const initialState = {
    searchData: []
};

function contactReducer(state = initialState.searchData, action) {
    switch (action.type) {
        // case ADD_CONTACT:
        //     addNewContact(action.contact);
        //     return [...state, action.contact];
        // case DELETE_CONTACT:
        //      state.splice(action.contactId, 1);
        //      return Array.from(state);
        // case EDIT_CONTACT:
        //     const newState = Array.from(state);
        //     const contactToEdit = newState.find((contact) => contact.id === action.contactId);
        //     Object.assign(contactToEdit, action.newContactData);
        //     return newState;
        case RECEIVE_CONTACTS:
            return action.contacts;
        default:
            return state;
    }

}

const reducer = combineReducers({searchData: contactReducer});

export default reducer;