import React, { Component } from 'react';

class AutocompleteItem extends Component {
  render() {
    return (
      <li onClick={ () => { this.props.onLiClick(this.props.value); } }>{ this.props.value }</li>
    )
  }
};

export default AutocompleteItem;
