import {combineReducers} from 'redux'
import {ADD_PERSON, EDIT_PERSON, DELETE_PERSON} from '../constants/ActionNames.js'


const initialState = {
    searchData: [{id: 0, name: 'Mike', birthday: '1993-12-15'},
        {id: 1, name: 'Kate', birthday: '1994-12-06'},
        {id: 2, name: 'Jerry', birthday: '2015-04-01'},
        {id: 3, name: 'Mike', birthday: '1998-03-12'}]
};

function personReducer(state = initialState.searchData, action) {
    switch (action.type) {
        case ADD_PERSON:
            return [...state, action.person];
        case DELETE_PERSON:
            state.splice(action.personId, 1);
            return Array.from(state);
        case EDIT_PERSON:
            const newState = Array.from(state);
            const personToEdit = newState.find((person) => person.id === action.personId);
            console.log(state, action.personId);
            Object.assign(personToEdit, action.newPersonData);
            return newState;
        default:
            return state;
    }

}

const reducer = combineReducers({searchData: personReducer});

export default reducer;