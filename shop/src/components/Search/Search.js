import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props)
    
    this.state={
      value: '',
      filterText: ''
    }
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
    this.props.onUserInput(event.target.value)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.serchItems(this.state.value)
  }

  render() {
    return (
      <div className="well blosd">
        <div className="input-group">
          <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            onChange={this.handleChange.bind(this)}
            type="text"
            className="form-control"
            value={this.props.filterText}
            placeholder="Поиск..."
            />
          </form>
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  onUserInput: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired
};

export default Search;