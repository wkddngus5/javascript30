import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidUpdate() {
    const { spacing, blur, base } = {...this.props};

    const spacingSuffix = document.querySelector('#spacing').dataset.sizing;
    const blurSuffix = document.querySelector('#blur').dataset.sizing;

    document.documentElement.style.setProperty(`--spacing`, `${spacing + spacingSuffix}`);
    document.documentElement.style.setProperty(`--blur`, `${blur + blurSuffix}`);
    document.documentElement.style.setProperty(`--base`, base);
  }

  render() {

    const { spacing, blur, base, onChange } = {...this.props};

    return (
      <div className="App">
        <h2>Update CSS Variables with <span className='hl'>JS</span></h2>

        <div className="controls">
          <label htmlFor="spacing">Spacing:</label>
          <input id="spacing" type="range" name="spacing"
                 min="10" max="200" value={spacing} data-sizing="px"
                 onChange={e => {
                   onChange('spacing', e.target.value);
                 }}
          />

          <label htmlFor="blur">Blur:</label>
          <input id="blur" type="range" name="blur"
                 min="0" max="25" value={blur} data-sizing="px"
                 onChange={e => {
                   onChange('blur', e.target.value);
                 }}
          />

          <label htmlFor="base">Base Color</label>
          <input id="base" type="color" name="base"
                 value={base}
                 onChange={e => {
                   onChange('base', e.target.value)
                 }}
          />
        </div>
        <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
      </div>
    );
  }
}

App.defaultProps = {
  spacing: 10,
  blur: 10,
  base: '#ffc600'
};

export default App;
