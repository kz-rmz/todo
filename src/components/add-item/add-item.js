import React, { Component } from 'react';
import './add-item.css';

class AddItem extends Component {
  state = {
    label: null,
    important: false,
    id: null
  }
  addItem = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {

    return (
      <div className="add-item">
        <form className="row" onSubmit={this.addItem}>
          <input type="text" className="col-8" id="label" onChange={this.handleChange} />
          <input type="submit" value="Добавить" className="offset-md-1 col btn btn-success" onClick={this.addItem} />
        </form>
      </div>
    )
  }

}

export default AddItem;

