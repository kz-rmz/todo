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
      this.createTodoItem('Make Coffee')
    ]
  }

  //---Methods
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: Math.random()
    }
  }

  addItem = ({ label }) => {
    const newItem = this.createTodoItem(label);
    let todos = [...this.state.todoData, newItem];
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

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    }

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }
  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }
  //---Component
  render() {
    const { todoData } = this.state;
    const doneCount = todoData
      .filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="col-sm-10 col-md-8 col-xl-5 app">
        <AppHeader className="row" todo={todoCount} done={doneCount} />
        <div id="search" className="row">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <AddItem addTodo={this.addItem} />
        <ToDoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
      </div >
    )
  }
}

export default App;