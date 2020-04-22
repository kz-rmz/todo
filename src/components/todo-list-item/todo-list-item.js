import React from 'react';
import './todo-list-item.css';

const TodoListItem = (props) => {

  const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = props;
  let classNames = 'todo-list-item';
  if (done) {
    classNames += ' done';
  }
  if (important) {
    classNames += ' important';
  }
  return (
    <span className={classNames}>
      <span className="todo-list-item-label">{label}</span>
      <div className="todo-list-item-btns">
        <button type='button'
          className='btn btn-outline-info'
          onClick={onToggleImportant}
        ><i className="fa fa-star"></i></button>
        <button type='button'
          className='btn btn-outline-success'
          onClick={onToggleDone}
        ><i className="fa fa-check"></i></button>
        <button type='button'
          className='btn btn-outline-danger'
          onClick={onDeleted}
        ><i className="fa fa-trash-o"></i></button>
      </div>
    </span >
  )
}

export default TodoListItem;
