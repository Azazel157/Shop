import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {

  handleChange(event) {
    this.props.onUserInput(event.target.value)
}

  render() {
    return (
      <div>
          <input
            onChange={this.handleChange.bind(this)}
            type="search"
            className="form-control"
            value={this.props.filterText}
          />
      </div>
    )
  }
}

Search.propTypes = {
  onUserInput: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired
};

export default Search;