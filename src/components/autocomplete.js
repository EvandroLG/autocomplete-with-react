import React, { Component } from 'react';
import AutocompleteItem from './autocomplete_item';
import Search from '../lib/search';
import debounce from '../lib/debounce';

class Autocomplete extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.search = new Search();
    this._onInputChange = debounce(this._onInputChange, 300);
  }

  _onInputChange(value) {
    let stateItems = this.state.items;
    let size = 0;

    this.search.getItems(value).forEach((item) => {
      size = stateItems.length;
      stateItems.push(<AutocompleteItem key={size} value={item} />);
    });

    this.setState({
      items: stateItems
    });
  }

  render() {
    return (
      <div>
        <input type="text" id="autocomplete" onChange={ (e) => { this._onInputChange(e.target.value); } } />

        <ul>
          {
            this.state.items.map((item) => {
              return item;
            })
          }
        </ul>
      </div>
    )
  }
};

export default Autocomplete;
