export const PLAY = 'PLAY';
export const OFF = 'OFF';

export function play(key) {
  return {type: PLAY, key}
}

export function off(key) {
  return {type: OFF, key}
}