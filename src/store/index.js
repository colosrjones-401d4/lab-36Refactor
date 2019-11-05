import {createStore, combineReducers} from 'redux';

import { reducer as toDoListReducer } from './todoList/todoList-reducer';

let reducers = combineReducers({
  todoList: toDoListReducer,
  item: toDoListReducer,
})

export default function() {
  return createStore(reducers, toDoListReducer());
}