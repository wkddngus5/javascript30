import { connect } from 'react-redux';

import Clock from '../components/Clock';
import { setTime } from '../actions/';

const mapStateToProps = state => {
  return {
    hours: state.hours,
    minutes: state.minutes,
    seconds: state.seconds
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setNowTime: () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      dispatch(setTime(hours, minutes, seconds));
    }
  }
};

const ClockContainer = connect(mapStateToProps, mapDispatchToProps)(Clock);

export default ClockContainer;