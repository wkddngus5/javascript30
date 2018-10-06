import { UPDATE_VALUE } from '../actions/';

const defaultValues = {
  spacing: 10,
  blur: 10,
  base: '#ffc600'
};

function app(state = defaultValues, action) {
  switch (action.type) {
    case UPDATE_VALUE:
      const newState = Object.assign({}, state);
      newState[action.name] = action.value;
      return newState;
  }
};

export default app;