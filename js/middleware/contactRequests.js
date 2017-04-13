import {addContact, editContact, deleteContact, requestContacts, receiveContacts, receiveError} from '../actions/ContactActions'
import {REQUEST_CONTACTS, REQUEST_ADD_CONTACT, REQUEST_EDIT_CONTACT, REQUEST_DELETE_CONTACT} from '../constants/ActionNames'

const contactMiddleware = store => next => action => {
    switch (action.type) {
        case REQUEST_CONTACTS:
            getContacts(store.dispatch);
            break;
        case REQUEST_ADD_CONTACT:
            addNewContact(store.dispatch, action.contact);
            break;
        case REQUEST_DELETE_CONTACT:
            deleteContactById(store.dispatch, action.contactId);
            break;
        case REQUEST_EDIT_CONTACT:
            editContactData(store.dispatch, action.newContactData);
            break;
    }

    next(action);
};

function addNewContact(dispatch, newContact) {
        return fetch('http://localhost:8050/api/contacts',
            {
                method: 'post',
                body: JSON.stringify(newContact),
                mode: 'cors',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            })
            .then(response => {
                response.json().then(id => {
                    newContact.id = id;
                    dispatch(addContact(newContact))
                })
            })
            .catch(err => dispatch(receiveError(err)));
}

function getContacts(dispatch) {
    return fetch('http://localhost:8050/api/contacts', {mode: 'cors'})
        .then(response => {
                if (response.status !== 200) {
                    return;
                }

                response.json().then(result => dispatch(receiveContacts(result)));
            }
        )
        .catch(err => dispatch(receiveError(err)));

}

function deleteContactById(dispatch, id) {
    return fetch(`http://localhost:8050/api/contacts/${id}`,
        {
            method: 'delete',
            mode: 'cors',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        })
        // .then(res => dispatch(requestContacts()));
        .then(res => dispatch(deleteContact(id)))
        .catch(err => dispatch(receiveError(err)));
}

function editContactData(dispatch, newContactData) {
    return fetch('http://localhost:8050/api/contacts',
        {
            method: 'put',
            body: JSON.stringify(newContactData),
            mode: 'cors',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        })
        // .then(res => dispatch(requestContacts()));
        .then(res => dispatch(editContact(newContactData)))
        .catch(err => dispatch(receiveError(err)));
}

export default contactMiddleware;
