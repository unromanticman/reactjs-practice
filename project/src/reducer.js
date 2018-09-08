import { combineReducers } from 'redux';
import common from './reducers/common';
import { routerReducer } from 'react-router-redux';
import testPage from './reducers/testpage';
import auth from './reducers/auth';

export default combineReducers({
  common,
  testPage,
  auth,
  router: routerReducer
});
