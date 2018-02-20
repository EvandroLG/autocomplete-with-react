import React, { Component } from 'react';
import AutocompleteItem from './autocomplete_item';
import Search from '../lib/search';
import debounce from '../lib/debounce';

class Autocomplete extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      value: ''
    };

    this.search = new Search();
    this._updateItems = debounce(this._updateItems, 300);
  }

  onItemClick(value) {
    this.setState({
      items: [],
      value: value
    });
  }

  _updateItems(value) {
    let stateItems = [];

    if (value) {
      this.search.getItems(value).forEach((item) => {
        let size = stateItems.length;
        let props = {
          value: item,
          onLiClick: this.onItemClick.bind(this)
        };

        stateItems.push(<AutocompleteItem key={size} {...props} />);
      });
    }

    this.setState({
      items: stateItems
    });
  }

  _onInputChange(value) {
    this.setState({
      value: value
    });

    this._updateItems(value);
  }

  _renderItems() {
    return this.state.items.map((item) => {
      return item;
    });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value}
         id="autocomplete" onChange={ (e) => { this._onInputChange(e.target.value); } } />

        <ul>
          { this._renderItems() }
        </ul>
      </div>
    )
  }
};

export default Autocomplete;
