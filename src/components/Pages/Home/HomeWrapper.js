import React from 'react';
// import Login from './Login/Login';
// import { Button } from 'antd';

// components
import Category from './Category/Category';
import Banner from './Banner/Banner';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <Button onClick={() => this.props.actions.showModal()}>Login</Button>
        {this.props.modal.show ? <Login {...this.props} /> : undefined} */}
        <Banner />
        <Category />
      </React.Fragment>
    );
  }
}
