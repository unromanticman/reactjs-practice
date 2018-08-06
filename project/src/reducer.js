import { combineReducers } from 'redux';
import common from './reducers/common';
import { routerReducer } from 'react-router-redux';
import testpage from './reducers/testpage';
import auth from './reducers/auth';

export default combineReducers({
  common,
  testpage,
  auth,
  router: routerReducer
});
