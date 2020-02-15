import React from 'react';
import { connect } from 'react-redux';
import HomeComponent from '../components/Pages/Home/HomeWrapper';
import { bindActionCreators } from 'redux';
import * as modalActions from '../../../actions/modalActions';

const HomeContainer = props => {
  return <HomeComponent {...props} />;
};

export default connect(
  state => {
    return {
      isFetching: state.isFetching,
      modal: state.modal
    };
  },
  dispatch => {
    return {
      actions: bindActionCreators(modalActions, dispatch)
    };
  }
)(HomeContainer);
