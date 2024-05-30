import { combineReducers } from 'redux';
import { counter } from '../features/counter/reducers';

const rootReducer = combineReducers({
    counter,
});

export default rootReducer;
