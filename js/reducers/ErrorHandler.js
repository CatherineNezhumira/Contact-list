import {combineReducers} from 'redux'
import {RECEIVE_ERROR, CLEAR_MESSAGE} from '../actions/ActionTypes.js'

const initialState = {
    errorMessage: ''
};

export default function errorReducer(state = initialState.errorMessage, action) {
    switch (action.type) {
        case RECEIVE_ERROR:
            return String(action.error);
            break;
        case CLEAR_MESSAGE:
            return '';
            break;
        default:
            return state;
    }

}
