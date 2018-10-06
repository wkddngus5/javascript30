export const UPDATE_VALUE = 'UPDATE_VALUE';

export function updateValue(name, value) {
  return {
    type: UPDATE_VALUE,
    name: name,
    value: value
  }
}