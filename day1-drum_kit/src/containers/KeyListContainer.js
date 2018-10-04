import { connect } from 'react-redux';

import KeyList from '../components/KeyList';
import { play, off } from '../actions/';

const mapStateToProps = state => {
  return {
    keys: state
  }
};

const playAudio = keyCode => {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
};

const mapDispatchToProps = dispatch => {
  return {
    onKeyDown: keyCode => {
      playAudio(keyCode);
      dispatch(play(keyCode))
    },
    removeTransition: keyCode => {
      dispatch(off(keyCode))
    },
    onClick: keyCode => {
      playAudio(keyCode);
      dispatch(play(keyCode))
    }
  }
};

const KeyListContainer = connect(mapStateToProps, mapDispatchToProps)(KeyList);

export default KeyListContainer;