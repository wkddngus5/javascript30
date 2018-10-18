import React, { Component } from 'react';
import './App.css';

import InboxContainer from '../containers/InboxContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InboxContainer/>
      </div>
    );
  }
}

export default App;
