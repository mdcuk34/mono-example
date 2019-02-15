import { createStore, combineReducers } from 'redux'
import { counter } from "@monoexample/shared";

const reducers = combineReducers({ counter })

export default createStore(reducers)
