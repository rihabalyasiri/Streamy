import {combineReducers} from 'redux';
import authReducer from './authReducer'

// to combine reducers
export default combineReducers ({
    auth: authReducer
})