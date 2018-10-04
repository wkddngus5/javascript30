import { PLAY, OFF } from "../actions";

const defaultKeys = [
  {
    dataKey: 65,
    kbd: 'A',
    text: 'clap'
  },
  {
    dataKey: 83,
    kbd: 'S',
    text: 'hithat'
  },
  {
    dataKey: 68,
    kbd: 'D',
    text: 'kick'
  },
  {
    dataKey: 70,
    kbd: 'F',
    text: 'openhat'
  },
  {
    dataKey: 71,
    kbd: 'G',
    text: 'boom'
  },
  {
    dataKey: 72,
    kbd: 'H',
    text: 'ride'
  },
  {
    dataKey: 74,
    kbd: 'J',
    text: 'snare'
  },
  {
    dataKey: 75,
    kbd: 'K',
    text: 'tom'
  },
  {
    dataKey: 76,
    kbd: 'L',
    text: 'tink'
  }
];

function drum (state = defaultKeys, action) {
  switch (action.type) {
    case PLAY:
      const newStateInPlay = [
        ...state
      ];

      let toPlay = newStateInPlay.find(key => key.dataKey === action.key);
      if(toPlay) {
        toPlay.playing = true;
      }
      return newStateInPlay;
    case OFF:
      const newStateInOff = [
        ...state
      ];

      let toOff = newStateInOff.find(key => key.dataKey === action.key);
      if(toOff) {
        toOff.playing = false;
      }
      return newStateInOff;
    default:
      return state;
  }
};

export default drum;
