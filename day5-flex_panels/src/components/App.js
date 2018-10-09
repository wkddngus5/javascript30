import React, { Component } from 'react';
import './App.css';

import PanelList from './PanelList';
import PanelListContainer from '../containers/PanelListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PanelListContainer/>
      </div>
    );
  }
}

export default App;
