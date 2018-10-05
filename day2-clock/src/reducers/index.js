import {SET_TIME} from "../actions";

const now = new Date();

const defaultTime = {
  hours: now.getHours(),
  minutes:  now.getMinutes(),
  seconds: now.getSeconds(),
};

function clock(state = defaultTime, action) {
  switch (action.type) {
    case SET_TIME:
      return {
        hours: action.hours,
        minutes: action.minutes,
        seconds: action.seconds
      };
    default:
      return state;
  }
};

export default clock;
