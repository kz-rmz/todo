import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ label, important }) => {
  return (
    <span className="todo-list-item">
      <span className="todo-list-item-label">{label}</span>
      <div className="todo-list-item-btns">
        <button type='button'
          className='btn btn-outline-secondary'><i className="fa fa-exclamation"></i></button>
        <button type='button'
          className='btn btn-outline-secondary'><i className="fa fa-trash-o"></i></button>
      </div>
    </span>
  )
}

export default TodoListItem;
