import {addContact, editContact, deleteContact, requestContacts, receiveContacts} from '../actions/ContactActions'
import {receiveError} from '../actions/ErrorActions'
import {REQUEST_CONTACTS, REQUEST_ADD_CONTACT, REQUEST_EDIT_CONTACT, REQUEST_DELETE_CONTACT} from '../actions/ActionTypes'

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
const contactUrl = 'http://localhost:8050/api/contacts';

function addNewContact(dispatch, newContact) {
        return fetch(contactUrl,
            {
                method: 'post',
                body: JSON.stringify(newContact),
                mode: 'cors',
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                }
            })
            .then(response => {
                if (response.status !== 201) {
                    dispatch(receiveError(`Server error: ${response.status}`));
                    return;
                }
                response.json().then(id => {
                    newContact.id = id;
                    dispatch(addContact(newContact))
                })
            })
            .catch(err => dispatch(receiveError(err)));
}

function getContacts(dispatch) {
    return fetch(contactUrl, {mode: 'cors'})
        .then(response => {
                if (response.status !== 200) {
                    dispatch(receiveError(`Server error: ${response.status}`));
                    return;
                }

                response.json().then(result => dispatch(receiveContacts(result)));
            }
        )
        .catch(err => dispatch(receiveError(err)));

}

function deleteContactById(dispatch, id) {
    console.log('delete', id);
    return fetch(`${contactUrl}/${id}`,
        {
            method: 'delete',
            mode: 'cors',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        })
        // .then(res => dispatch(requestContacts()));
        .then(res => {
            if (res.status !== 200) {
                dispatch(receiveError(`Server error: ${res.status}`));
                return;
            }
            dispatch(deleteContact(id));
        })
        .catch(err => dispatch(receiveError(err)));
}

function editContactData(dispatch, newContactData) {
    return fetch(contactUrl,
        {
            method: 'put',
            body: JSON.stringify(newContactData),
            mode: 'cors',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        })
        // .then(res => dispatch(requestContacts()));
        .then(res => {
            if (res.status !== 200) {
                dispatch(receiveError(`Server error: ${res.status}`));
                return;
            }
            dispatch(editContact(newContactData))
        })
        .catch(err => dispatch(receiveError(err)));
}

export default contactMiddleware;
