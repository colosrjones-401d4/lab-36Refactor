import React, {useState, useEffect, useReducer} from "react";

import { connect } from 'react-redux';

import * as actions from '../../store/todolist-action';

import uuid from "uuid/v4";
import { When } from "../if";
import TodoForm from "./form.js";
import TodoList from "./list.js";
import TodoItem from "./item.js";

import "./todo.scss";

function ToDo(props) {
  console.log({props})
  // const [state, dispatch] = useReducer(reducers, initialState);

  // const _addItem = (data) => {
  //   data._id = uuid();
  //   data.complete = false;
  //   dispatch({type: 'add', payload:data});
  // };

  // const _deleteItem = (id) => {
  //   dispatch({type:'delete', payload:id});
  // }

  // const _toggleComplete = (id) => {
  //   dispatch({type: 'toggle', payload:id});
  // };

  // const _toggleDetails = id => {
  //   dispatch({type: 'details', payload:id});
  // };
  return (
    <>
      <header>
        <h2> 
          There are {props.todo.todoList.filter( item => !item.complete ).length} Items To Complete 
        </h2>
        </header>
        <TodoForm/>
        {/* <section className="todo">
        <div>
          
           <TodoForm handleSubmit={_addItem} />
         </div>

         <div>
           <TodoList
             list={state.todoList}
             handleComplete={_toggleComplete}
             handleDetails={_toggleDetails}
             handleDelete={_deleteItem}
           />
         </div>
       </section>

       <When condition={state.showDetails}>
         <TodoItem handleDetails={_toggleDetails} item={state.details} />
       </When> */}
    </>
  );
}

const mapStatetoProps = (state)=>({
  todo: state.toDo
})

const mapDispatchtoProps = (dispatch, getState)=>({
  addItem:()=>dispatch(actions()),
  deleteItem:()=>dispatch(actions()),
  toggleComplete:()=>dispatch(actions()),
  toggleDetails:()=>dispatch(actions()) 
});

export default connect(mapStatetoProps, mapDispatchtoProps)(ToDo);