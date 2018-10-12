export const LOAD_DATA = 'LOAD_DATA';
export const CHANGE_INPUT = 'CHANGE_INPUT';

export function loadData(data) {
  return {
    type: LOAD_DATA,
    data: data
  }
}

export function changeInput(text) {
  return {
    type: CHANGE_INPUT,
    text: text
  }
}