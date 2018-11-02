import React, { Component } from 'react';
import './App.css';
import Band from './Band';

class App extends Component {
  render() {
    const { bands } = this.props;
    const bandsList = bands.map((band, i) => {
      return <Band
        key={i}
        band={band}
      />
    });

    return (
      <ul id="bands">
        {bandsList}
      </ul>
    );
  }
}

export default App;
