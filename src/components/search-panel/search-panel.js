import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
  return (
    <div className="col search-panel">
      <input type="text" placeholder="search" className="form-control" />
    </div>
  )
}

export default SearchPanel;