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
    doneData: [
    ],
    todoData: [
      this.createTodoItem('Make Coffee'),
      this.createTodoItem('Make Money'),
      this.createTodoItem('Buy Milk'),
      { label: 'Buy smthng', important: false, done: true, id: Math.random() }
    ],
    term: ''
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

  onSearchChange = (term) => {
    this.setState({ term })
  }

  todosFilter = (x) => {
    if (x === undefined) {
      return this.state.todoData;
    } else if (x === true) {
      // let result = this.state.todoData.filter((el) => {
      //   return el.done === true;
      // })
      this.setState(({ doneData }) => {
        return { doneData: this.state.todoData.filter((el) => el.done === true) }
      })
    }
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label
        .toLowerCase()
        .indexOf(term.toLowerCase()) > -1;
    })
  }

  //---Component
  render() {
    const { todoData, term } = this.state;
    const visibleItems = this.search(todoData, term);
    const doneCount = todoData
      .filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    console.log('------')
    console.log(this.state.doneData)
    console.log('------')

    // const todosF = todoData.filter((elem) => {
    //   return elem.done === falsek
    // })

    return (
      <div className="col-10 col-md-8 col-xl-5 app">
        <AppHeader className="row" todo={todoCount} done={doneCount} />
        <div id="search" className="row">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter todosFilter={this.todosFilter} />
        </div>
        <AddItem addTodo={this.addItem} />
        <ToDoList
          todos={visibleItems} //-------------------------
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
      </div >
    )
  }
}

export default App;