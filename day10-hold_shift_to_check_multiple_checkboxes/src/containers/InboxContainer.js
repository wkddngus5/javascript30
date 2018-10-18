import { connect } from 'react-redux';

import Inbox from '../components/Inbox';
import { click } from "../actions";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    click: (e, index) => {
      dispatch(click(e, index));
    }
  }
};

const InboxContainer = connect(mapStateToProps, mapDispatchToProps)(Inbox);

export default InboxContainer;
