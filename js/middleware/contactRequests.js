import {requestContacts, receiveContacts} from '../actions/ContactActions'
import {REQUEST_CONTACTS, ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT} from '../constants/ActionNames'

const contactMiddleware = store => next => action => {
    switch (action.type) {
        case REQUEST_CONTACTS:
            getContacts(store.dispatch);
            break;
        case ADD_CONTACT:
            addNewContact(store.dispatch, action.contact);
            break;
        case DELETE_CONTACT:
            deleteContact(store.dispatch, action.contactId);
            break;
        case EDIT_CONTACT:
            editContact(store.dispatch, action.newContactData);
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
            .then(dispatch(requestContacts()));
        // .then(function (data) {
        //     console.log('Request succeeded with JSON response', data);
        // })
        // .catch(function (error) {
        //     console.log('Request failed', error);
        // });
}

function getContacts(dispatch) {
    return fetch('http://localhost:8050/api/contacts', {mode: 'cors'})
        .then(response => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                response.json().then(result => dispatch(receiveContacts(result)));
            }
        )
        .catch(err => console.log('Fetch Error :-S', err));

}

function deleteContact(dispatch, id) {
    return fetch(`http://localhost:8050/api/contacts/${id}`,
        {
            method: 'delete',
            mode: 'cors',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        })
        .then(res => dispatch(requestContacts()));
}

function editContact(dispatch, newContactData) {
    return fetch('http://localhost:8050/api/contacts',
        {
            method: 'put',
            body: JSON.stringify(newContactData),
            mode: 'cors',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            }
        })
        .then(res => dispatch(requestContacts()));
}

export default contactMiddleware;
