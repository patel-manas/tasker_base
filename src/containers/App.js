import React, { Component } from 'react';
import HeaderComponent from '../components/Common/Header';
import BodyComponent from '../components/Common/Body';

export default class app extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderComponent {...this.prop} />
        <BodyComponent {...this.props} />
      </React.Fragment>
    );
  }
}
