import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import reducer from './reducer';

import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const getMiddleware = () => {
  // Enable additional logging in non-production environments.
  return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger())
};

export const store = createStore(
  reducer, composeEnhancers(getMiddleware()));
