import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todoReducers';
import loaderReducer from './reducers/loaderReducer';

const middleware = applyMiddleware(thunk, logger);

const store = createStore(
  combineReducers({ todoReducer, isFetching: loaderReducer }),
  middleware
);
export default store;
