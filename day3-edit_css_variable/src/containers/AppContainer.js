import { connect } from 'react-redux';

import App from '../components/App';
import { updateValue } from '../actions/';

const mapStateToProps = state => {
  return { ...state }
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: (name, value) => {
      dispatch(updateValue(name, value))
    }
  }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;