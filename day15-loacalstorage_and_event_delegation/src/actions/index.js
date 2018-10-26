export const ADD_ITEM = 'ADD_ITEM';
export const TOGGLE_ITEM = 'TOGGLE_ITEM';

export function addItem(text) {
  return {
    type: ADD_ITEM,
    text: text
  }
}

export function toggleItem(index) {
  return {
    type: TOGGLE_ITEM,
    index: index
  }
}