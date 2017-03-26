import {ADD_PERSON, EDIT_PERSON, DELETE_PERSON} from '../constants/ActionNames.js'

export function addPerson(person) {
    return {type: ADD_PERSON, person};
}

export function editPerson(personId, newPersonData) {
    return {type: EDIT_PERSON, personId, newPersonData};
}

export function deletePerson(personId) {
    return {type: DELETE_PERSON, personId};
}