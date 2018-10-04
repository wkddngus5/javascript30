import React, { Component } from 'react';
import Key from './Key';
import Audio from "./Audio";

class KeyList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onKeyDown, removeTransition } = this.props;

    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', e => {
      if (e.propertyName !== 'transform') return;
      removeTransition(e.target.getAttribute('data-key') * 1);
    }));

    window.addEventListener('keydown', e => {
      onKeyDown(e.keyCode);
    });
  }

  render() {
    const { keys, onClick } = this.props;
    return (
      <div>
        <div className="keys">
          {keys.map((key, index) => (
            <Key
              key={index}
              {...key}
              onClick={onClick}
            />
          ))}
        </div>
        {keys.map((key, index) => (
          <Audio
            key={index}
            {...key}
          />
        ))}
      </div>
    )
  }
}

export default KeyList;