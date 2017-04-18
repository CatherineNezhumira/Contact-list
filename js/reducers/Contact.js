import {ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT, RECEIVE_CONTACTS} from '../actions/ActionTypes.js'


const initialState = {
    searchData: [],
    errorMessage: ''
};

export default function contactReducer(state = initialState.searchData, action) {
    switch (action.type) {
        case ADD_CONTACT:
            return [...state, action.contact];
        case DELETE_CONTACT:
            const contactIdToDelete = state.indexOf(state.find((contact) => contact.id === action.contactId));
            const newStateForEdit = Array.from(state);
            newStateForEdit.splice(contactIdToDelete, 1);
            return newStateForEdit;
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