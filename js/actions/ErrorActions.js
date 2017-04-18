import {RECEIVE_ERROR, CLEAR_MESSAGE} from './ActionTypes.js'

export function receiveError(error) {
    return {type: RECEIVE_ERROR, error};
}

export function clearErrorMessage() {
    return {type: CLEAR_MESSAGE};
}