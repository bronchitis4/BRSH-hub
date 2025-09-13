import { createStore } from 'redux';
import postsReducer from '../reducers/postsListReducer';
import { combineReducers } from 'redux';

export const store = createStore(combineReducers({posts: postsReducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
