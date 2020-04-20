import React from 'react';
import './app-header.css';

const AppHeader = ({ todo, done }) => {
  return (
    <div className="row todo-header">
      <h1 className="col-sm">Список задач</h1>
      <h2 className="col-sm">Задач осталось: {todo} Сделано: {done}</h2>
    </div >
  )
}

export default AppHeader;
