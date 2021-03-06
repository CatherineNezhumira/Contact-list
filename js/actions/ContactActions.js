import {ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT,
    REQUEST_ADD_CONTACT, REQUEST_EDIT_CONTACT, REQUEST_DELETE_CONTACT,
    REQUEST_CONTACTS, RECEIVE_CONTACTS} from './ActionTypes.js'

export function addContact(contact) {
    return {type: ADD_CONTACT, contact};
}

export function editContact(newContactData) {
    return {type: EDIT_CONTACT, newContactData};
}

export function deleteContact(contactId) {
    return {type: DELETE_CONTACT, contactId};
}

export function addContactRequest(contact) {
    return {type: REQUEST_ADD_CONTACT, contact};
}

export function editContactRequest(newContactData) {
    return {type: REQUEST_EDIT_CONTACT, newContactData};
}

export function deleteContactRequest(contactId) {
    return {type: REQUEST_DELETE_CONTACT, contactId};
}

export function requestContacts() {
    return {type: REQUEST_CONTACTS};
}

export function receiveContacts(json) {
    return {type: RECEIVE_CONTACTS, contacts: json};
}