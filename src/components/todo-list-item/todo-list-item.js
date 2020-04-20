import React, { Component } from 'react';
import './todo-list-item.css';

class TodoListItem extends Component {
  //---State
  state = {
    done: false,
    important: false
  }
  //---Events-Handlers
  onDone = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      }
    })
  }
  onImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      }
    })
  }
  //---Component
  render() {
    const { label } = this.props;
    const { done, important } = this.state;
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
            className='btn btn-outline-secondary'
            onClick={this.onImportant}
          ><i className="fa fa-star"></i></button>
          <button type='button'
            className='btn btn-outline-secondary'
            onClick={this.onDone}
          ><i className="fa fa-check"></i></button>
          <button type='button'
            className='btn btn-outline-secondary'><i className="fa fa-trash-o"></i></button>
        </div>
      </span >
    )
  }
}

export default TodoListItem;
