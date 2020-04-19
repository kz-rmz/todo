import React from 'react';
import ReactDom from 'react-dom';
import ToDoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import './index.css';

const App = () => {

  const todoData = [
    { label: "Drink Coffee", important: true, id: 0 },
    { label: "Make an App", important: false, id: 1 },
    { label: "Take a break", important: false, id: 2 },
  ]

  return (
    <div className="container col-md-6 col-xl-4">
      <AppHeader />
      <SearchPanel />
      <ToDoList todos={todoData} />
    </div>
  )
}


ReactDom.render(<App />, document.getElementById('root'));