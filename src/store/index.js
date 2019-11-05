import {createStore, combineReducers} from 'redux';

import toDoListReducer from './todolist-reducer.js';

let reducers = combineReducers({
  toDo: toDoListReducer
})

export default () => createStore(reducers);