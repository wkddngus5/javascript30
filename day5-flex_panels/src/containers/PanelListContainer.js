import { connect } from 'react-redux';

import PanelList from '../components/PanelList';
import { openPanel } from '../actions/';

const mapStateToProps = state => {
  return {
    panels: state
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: (index) => {
      dispatch(openPanel(index))
    }
  }
};

const PanelListContainer = connect(mapStateToProps, mapDispatchToProps)(PanelList);

export default PanelListContainer;