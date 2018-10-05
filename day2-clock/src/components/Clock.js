import React, { Component } from 'react';

import './Clock.css';

class Clock extends Component {
  hoursToDegrees(hours) {
    return ((hours / 24) * 360) + 90;
  };

  minutesToDegrees(minutes) {
    return ((minutes / 60) * 360) + 90;
  };

  secondsToDegrees(seconds) {
    return ((seconds / 60) * 360) + 90;
  };

  componentDidMount() {
    const { setNowTime } = this.props;
    setInterval(setNowTime, 1000);
  }

  render() {
    const { hours, minutes, seconds } = this.props;

    const hourStyle = {
      transform: `rotate(${this.hoursToDegrees(hours)}deg)`
    };

    const minuteStyle = {
      transform: `rotate(${this.minutesToDegrees(minutes)}deg)`
    };

    const secondStyle = {
      transform: `rotate(${this.secondsToDegrees(seconds)}deg)`
    };

    return (
      <div className="clock">
        <div className="clock-face">
          <div className="hand hour-hand" style={hourStyle}></div>
          <div className="hand min-hand" style={minuteStyle}></div>
          <div className="hand second-hand" style={secondStyle}></div>
        </div>
      </div>
    )
  };
}

export default Clock;