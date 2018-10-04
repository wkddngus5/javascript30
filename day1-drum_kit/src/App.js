import React, { Component } from 'react';
import './App.css';

import KeyListContainer from './containers/KeyListContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <KeyListContainer />
      </div>
    );
  }
}

export default App;
