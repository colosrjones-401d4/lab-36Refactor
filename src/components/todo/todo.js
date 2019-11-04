import React from 'react';
import { useState, useEffect } from 'react';
import uuid from 'uuid/v4';

//Components
import Header from '../header';
import Form from '../form';
import List from '../list';
import Details from '../details';

//Styling
import './todo.scss';

export default function ToDo() {

  let initialList = [];
  let [todoList, setTodoList] = useState(initialList);
  
  let initialItem = {};
  let [item, setItem] = useState(initialItem);

  let initialShowDetails = false;
  let [showDetails, setShowDetails] = useState(initialShowDetails);

  let initialDetails = {};
  let [details, setDetails] = useState(initialDetails);

  let toggleComplete = id => {
    setTodoList(
      todoList.map(item =>
        item._id === id ? {
          ...item,
          complete: !item.complete,
        } : item
      )
    )
  };

  let toggleDetails = id => {
    let toggledItem = todoList.find(item => item._id === id);
    setDetails(toggledItem || {});
    setShowDetails(!!toggledItem);
  }

  let addItem = (e) => {
    e.preventDefault();
    e.target.reset();

    item['_id'] = uuid();
    item['complete'] = false;
  
    setTodoList(state => ([...todoList, item]));
    setItem( _ => ({}));  
  };

  let deleteItem = id => {
    let newList = todoList.filter(item => item._id !== id);
    setTodoList(newList);
  };

  let handleInputChange = e => {
    let { name, value } = e.target;
    setItem(state => ({
      ...state, [name]: value
    }));
  };

  return (
    <>
      <Header 
        todoList={todoList}
      />
      <section className="todo">
        <Form 
          addItem={addItem}
          handleInputChange={handleInputChange}
        />
        <List 
          todoList={todoList}
          toggleComplete={toggleComplete}
          toggleDetails={toggleDetails}
          deleteItem={deleteItem}
        />
      </section>
        <Details
          showDetails={showDetails}
          details={details}
          toggleDetails={toggleDetails}
        />
    </>
  );
}