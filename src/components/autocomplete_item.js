import React, { Component } from 'react';

class AutocompleteItem extends Component {
  render() {
    return (
      <li>{ this.props.value }</li>
    )
  }
};

export default AutocompleteItem;
