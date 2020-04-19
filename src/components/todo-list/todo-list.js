import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

const ToDoList = ({ todos }) => {
  const elements = todos.map((elem) => {
    return (
      <li key={elem.id} className="list-group-item">
        <TodoListItem {...elem} />
      </li>
    )
  }
  );
  return (
    <ul className="list-group todo-list row">
      {elements}
    </ul>
  )
}

export default ToDoList;