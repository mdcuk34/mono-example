import { createStore, combineReducers, applyMiddleware } from 'redux';
import { counter } from '@monoexample/shared';
import thunk from 'redux-thunk';

const reducers = combineReducers({ counter: counter.reducer });

export default createStore(reducers, applyMiddleware(thunk));
