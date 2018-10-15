export const START_DRAWING = 'START_DRAWING';
export const STOP_DRAWING = 'STOP_DRAWING';
export const MOUSE_MOVE = 'MOUSE_MOVE';
export const TOGGLE_DIRECTION = 'TOGGL_DIRECTION';

export function stopDrawing() {
  return {
    type: STOP_DRAWING
  }
}

export function startDrawing(lastX, lastY) {
  return {
    type: START_DRAWING,
    lastX: lastX,
    lastY: lastY
  }
}


export function mouseMove(lastX, lastY) {
  return {
    type: MOUSE_MOVE,
    lastX: lastX,
    lastY: lastY
  }
}

export function toggleDirection() {
  return {
    type: TOGGLE_DIRECTION
  }
}
