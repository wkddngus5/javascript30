import { ADD_ITEM, TOGGLE_ITEM } from '../actions/';

const defaultState = {
  items: JSON.parse(localStorage.getItem('items')) || []
};

function app(state = defaultState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        items: [
          ...state.items,
          {
            text: action.text,
            done: false
          }
        ]
      };
    case TOGGLE_ITEM:
      return {
        items: [
          ...state.items.slice(0, action.index),
          Object.assign({}, state.items[action.index], {
              done: !state.items[action.index].done
          }),
          ...state.items.slice(action.index + 1)
        ]
      };
    default:
      return state;
  }
}

export default app;
