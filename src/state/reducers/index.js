import {combineReducers} from 'redux';
import accountReducer from './accountReducer'
import logoReducer from './logoReducer'

const reducers = combineReducers({
    account:accountReducer,
    logo:logoReducer
});

export default reducers