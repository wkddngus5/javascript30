import { LOAD_DATA, CHANGE_INPUT } from '../actions/'

export const defaultState = {
  input: '',
  locations: [],
  suggestions: []
};

function places(state = defaultState, action) {
  switch(action.type) {
    case LOAD_DATA:
      return {
        ...state,
        locations: action.data
      };
    case CHANGE_INPUT:

      const matched = state.locations.filter(location => {
        const regex = new RegExp(action.text, 'gi');
        return location.city.match(regex) || location.state.match(regex);
      }).splice(0, 15);

      return {
        ...state,
        input: action.text,
        suggestions: matched
      };
  }
}

export default places;