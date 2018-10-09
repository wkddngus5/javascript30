import { OPEN_PANEL } from "../actions";

const defaultState = [
  {
    top: 'Hey',
    middle: `Let's`,
    bottom: 'Dance',
    image: 'https://source.unsplash.com/gYl-UtwNg_I/1500x1500',
    open: false
  },
  {
    top: 'Give',
    middle: 'Take',
    bottom: 'Receive',
    image: 'https://source.unsplash.com/rFKUFzjPYiQ/1500x1500',
    open: false
  },
  {
    top: 'Experience',
    middle: 'It',
    bottom: 'Today',
    image: 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d',
    open: false
  },
  {
    top: 'Give',
    middle: 'All',
    bottom: 'You can',
    image: 'https://source.unsplash.com/ITjiVXcwVng/1500x1500',
    open: false
  },
  {
    top: 'Life',
    middle: 'In',
    bottom: 'Motion',
    image: 'https://source.unsplash.com/3MNzGlQM7qs/1500x1500',
    open: false
  },
];

function panel(state = defaultState, action) {
  switch(action.type) {
    case OPEN_PANEL:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          open: !state[action.index].open
        }),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

export default panel;