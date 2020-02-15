import React from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../components/Common/Header';
import BodyComponent from '../components/Common/Body';
import FooterComponent from '../components/Common/Footer';
import { bindActionCreators } from 'redux';
import * as modalActions from '../../../actions/modalActions';

const App = props => {
  return (
    <React.Fragment>
      <HeaderComponent {...props} />
      <BodyComponent {...props} />
      <FooterComponent {...props} />
    </React.Fragment>
  );
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
)(App);
