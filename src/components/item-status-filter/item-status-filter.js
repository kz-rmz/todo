import React, { Component } from 'react'

class ItemStatusFilter extends Component {
  render() {
    const { todosFilter } = this.props;
    return (
      <div className="col offset-1 btn-group" id="btns">
        <button type='button'
          className='btn btn-outline-primary active' onClick={() => { todosFilter(1) }}>Все</button>
        <button type='button'
          className='btn btn-outline-success' onClick={() => { todosFilter(false) }}>Активные</button>
        <button type='button'
          className='btn btn-outline-secondary' onClick={() => { todosFilter(true) }}>Выполненые</button>
      </div >
    )
  }
}

export default ItemStatusFilter;
