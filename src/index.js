import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Autocomplete from './components/autocomplete';

class App extends Component {
  render() {
    return (
      <Autocomplete />
    )
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
