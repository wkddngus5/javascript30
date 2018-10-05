export const SET_TIME = 'SET_TIME';

export function setTime(hours, minutes, seconds) {
  return {
    type: SET_TIME,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }
}



