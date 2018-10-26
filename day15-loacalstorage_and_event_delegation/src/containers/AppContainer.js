import { connect } from 'react-redux';

import App from '../components/App';
import { addItem, toggleItem } from "../actions";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: (text) => {
      dispatch(addItem(text));
    },
    toggleItem: (index) => {
      dispatch(toggleItem(index));
    }
  }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
