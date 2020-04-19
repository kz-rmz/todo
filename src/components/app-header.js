import React from 'react';
import './app-header.css';

const AppHeader = ({ todo, done }) => {
  return (
    <div className="todo-header d-flex row">
      <h1>Список задач</h1>
      <h2>Задач осталось: {todo}, Сделано: {done}</h2>
    </div >
  )
}

export default AppHeader;
