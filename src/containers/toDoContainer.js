import React from 'react';
import { connect } from 'react-redux';
import * as addTodo from '../actions/todoActions';
import Banner from '../components/Pages/Home/Banner/Banner';
import { bindActionCreators } from 'redux';

const BannerContainer = props => {
  return <Banner {...props} />;
};

export default connect(
  state => {
    return {
      isFetching: state.isFetching,
      merchantCampaign: state.merchantCampaign,
      modal: state.modal
    };
  },
  dispatch => {
    return {
      actions: bindActionCreators(addTodo, dispatch)
    };
  }
)(BannerContainer);
