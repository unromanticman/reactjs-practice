import { combineReducers } from 'redux';
import common from './reducers/common';
import { routerReducer } from 'react-router-redux';
import testpage from './reducers/testpage';
export default combineReducers({
  common,
  testpage,
  router: routerReducer
});
