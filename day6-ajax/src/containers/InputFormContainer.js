import { connect } from 'react-redux';

import InputForm from '../components/InputForm';
import { loadData, changeInput } from '../actions/';
import { defaultState } from "../reducers";

const mapStateToProps = state => {
  if(!state) return defaultState;
  return {
    ...state
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: (data) => {
      dispatch(loadData(data));
    },
    onChange: (text) => {
      dispatch(changeInput(text));
    }
  }
};

const InputFormContainer = connect(mapStateToProps, mapDispatchToProps)(InputForm);

export default InputFormContainer;