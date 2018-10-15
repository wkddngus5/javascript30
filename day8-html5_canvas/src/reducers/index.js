import { START_DRAWING, STOP_DRAWING, MOUSE_MOVE, TOGGLE_DIRECTION } from "../actions";

const defaultState = {
  isDrawing: false,
  lastX: 0,
  lastY: 0,
  hue: 0,
  direction: true
};

function canvas(state = defaultState, action) {
  switch (action.type) {
    case START_DRAWING:
      return {
        ...state,
        isDrawing: true,
        lastX: action.lastX,
        lastY: action.lastY
      };
    case STOP_DRAWING:
      return {
        ...state,
        isDrawing: false
      };
    case MOUSE_MOVE:
      const newHue = state.hue >= 360 ? 0 : state.hue + 1;
      return {
        ...state,
        lastX: action.lastX,
        lastY: action.lastY,
        hue: newHue,
      };
    case TOGGLE_DIRECTION:
      return {
        ...state,
        direction: !state.direction
      }
    default:
      return state
  }
}

export default canvas;