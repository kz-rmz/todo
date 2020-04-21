import React from 'react';
import ToDoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

const App = () => {

  const todoData = [
    { label: "Drink Coffee", important: true, id: 0 },
    { label: "Make an App", important: false, id: 1 },
    { label: "Take a break", important: false, id: 2 },
  ]

  return (
    <div className="col-sm-10 col-md-8 col-xl-5 app">
      <AppHeader className="row" />
      <div id="search" className="row">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <ToDoList className="row"
        todos={todoData}
        onDeleted={(id) => console.log(id)}
      />
    </div >
  )
}

export default App;