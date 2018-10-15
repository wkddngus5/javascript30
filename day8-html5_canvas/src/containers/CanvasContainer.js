import { connect } from 'react-redux';

import Canvas from '../components/Canvas';
import { startDrawing, stopDrawing, mouseMove, toggleDirection } from "../actions";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    startDrawing: () => {
      dispatch(startDrawing());
    },
    stopDrawing: () => {
      dispatch(stopDrawing());
    },
    mouseMove: () => {
      dispatch(mouseMove());
    },
    toggleDirection: () => {
      dispatch(toggleDirection());
    }
  }
};

const CanvasContainer = connect(mapStateToProps, mapDispatchToProps)(Canvas);

export default CanvasContainer;
