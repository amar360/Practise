import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import LoginReducer from './LoginReducer';

const allReducers = combineReducers({
  counter: counterReducer,
  isLoggedIn: LoginReducer,
});

export default allReducers;
