import React, { Component } from 'react'

class ItemStatusFilter extends Component {
  render() {
    return (
      <div className="col offset-md-1 btn-group" id="btns">
        <button type='button'
          className='btn btn-outline-secondary'>Все</button>
        <button type='button'
          className='btn btn-outline-secondary'>Активные</button>
        <button type='button'
          className='btn btn-outline-secondary'>Выполненые</button>
      </div>
    )
  }
}

export default ItemStatusFilter;
