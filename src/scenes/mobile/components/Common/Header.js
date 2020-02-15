import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PostTask from './PostTask';
import { Icon } from 'antd';
import Logo from '../../assets/images/taskoo_icon.svg';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={Logo} />
        <Icon type="menu" />
      </div>
    );
  }
}
