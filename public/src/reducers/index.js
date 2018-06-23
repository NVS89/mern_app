import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import users from './user.reducer';

const rootReducer = combineReducers({
    users,
    form,
});

export default rootReducer;
