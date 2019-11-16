import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import modal from './reducers/modalReducer';
import fetching from './reducers/loaderReducer';

const middleware = applyMiddleware(thunk, logger);

const store = createStore(combineReducers({ modal, fetching }), middleware);
export default store;
