import {combineReducers} from 'redux'
import contactReducer from './Contact'
import errorReducer from './ErrorHandler'


const reducer = combineReducers({searchData: contactReducer, errorMessage: errorReducer});

export default reducer;