import  { CLICK } from "../actions";

const defaultState = {
  items: [
    {
      text: 'This is an inbox layout.',
      checked: false
    },
    {
      text: 'Check one item',
      checked: false
    },
    {
      text: 'Hold down your Shift key',
      checked: false
    },
    {
      text: 'Check a lower item',
      checked: false
    },
    {
      text: 'Everything inbetween should also be set to checked',
      checked: false
    },
    {
      text: 'Try do it without any libraries',
      checked: false
    },
    {
      text: 'Just regular JavaScript',
      checked: false
    },
    {
      text: 'Good Luck!',
      checked: false
    },
    {
      text: 'Don\'t forget to tweet your result!',
      checked: false
    },
  ],
  lastChecked: null
};

function inbox(state = defaultState, action) {
  switch (action.type) {
    case CLICK:
      console.log(state.lastChecked);
      if(!action.shiftKey || state.lastChecked == null) {
        return {
          items: [
            ...state.items.slice(0, action.index),
            Object.assign({}, state.items[action.index], {
              checked: !state.items[action.index].checked
            }),
            ...state.items.slice(action.index + 1)
          ],
          lastChecked: action.index
        };
      }

      const top = action.index < state.lastChecked ? action.index : state.lastChecked;
      const bottom = action.index > state.lastChecked ? action.index : state.lastChecked;

      return {
        ...state,
        items: state.items.map((item, index) => {
          if(index < top || index > bottom) {
            return item;
          }

          return Object.assign({}, item, {
            checked: true
          })
        })


      }


    default:
      return state;
  }
}

export default inbox;
