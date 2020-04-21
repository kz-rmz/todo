import React, { Component } from 'react';
import ToDoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import AddItem from '../add-item';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

class App extends Component {
  //---State
  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 0 },
      { label: "Make an App", important: false, id: 1 },
      { label: "Take a break", important: false, id: 2 },
    ]
  }
  addItem = (value) => {
    value.id = this.state.todoData.length;
    let todos = [...this.state.todoData, value];
    this.setState({
      todoData: todos
    })
  }

  deleteItem = (id) => {
    let todos = this.state.todoData.filter((todo) => {
      return todo.id !== id;
    })
    this.setState({
      todoData: todos
    })
  }
  //---Component
  render() {
    return (
      <div className="col-sm-10 col-md-8 col-xl-5 app">
        <AppHeader className="row" />
        <div id="search" className="row">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <AddItem addTodo={this.addItem} />
        <ToDoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
        />
      </div >
    )
  }
}

export default App;