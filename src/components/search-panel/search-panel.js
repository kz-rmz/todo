import React, { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
  state = {
    term: ''
  };
  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  }

  render() {
    return (
      <div className="col search-panel" >
        <input type="text"
          placeholder="search"
          className="form-control"
          value={this.state.term}
          onChange={this.onSearchChange} />
      </div>
    )
  }

}

export default SearchPanel;