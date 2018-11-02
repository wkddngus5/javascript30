import { connect } from 'react-redux';

import App from '../components/App';

const mapStateToProps = state => {
  state.bands.sort((a, b) => {
    return strip(a) > strip(b) ? 1 : -1;
  });

  return state;
};

function strip(brandName) {
  return brandName.replace(/^(a |the |an )/i, '').trim();
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
