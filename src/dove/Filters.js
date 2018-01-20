import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
  // sets the filter entered by user
  handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.statusInput.value,
      this.refs.imagesCollectedRangeInput.value,
    );
  }

  render() {
    return (
      <div className='col-sm-12'>
        <div className='col-sm-4'>
          <input
            type='text'
            className='form-control'
            placeholder='Search in last command...'
            value={this.props.filterText}
            ref='filterTextInput'
            onChange={this.handleChange} />
        </div>
        <div className='col-sm-4'>
          <select
            className='form-control'
            value={this.props.statusFilter}
            ref='statusInput'
            onChange={this.handleChange}>
            <option value=''>Filter by State</option>
            <option key={true} value={true}>ACTIVE</option>
            <option key={false} value={false}>INACTIVE</option>
          </select>
        </div>
        <div className='col-sm-4'>
          <select
            className='form-control'
            ref='imagesCollectedRangeInput'
            value={this.props.imagesCollectedFilter}
            onChange={this.handleChange}>
            <option value='0'>Filter by Images Collected</option>
            <option value='1000'>greater than 1000</option>
            <option value='5000'>greater than 5000</option>
            <option value='10000'>greater than 10000</option>
            <option value='50000'>greater than 50000</option>
          </select>
        </div>
      </div>
    );
  }
}

Filters.propTypes = {
  onUserInput: PropTypes.func,
};

export default Filters;
