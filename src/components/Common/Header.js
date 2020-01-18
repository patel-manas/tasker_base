import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PostTask from './PostTask';
import { Button } from 'antd';
import Logo from '../../assets/images/taskoo_icon.svg';
export default class Header extends Component {
  render() {
    return (
      <nav className="nav_wrapper">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="nav_list">
          <li className="nav_list_item">
            <Button
              type="primary"
              onClick={() =>
                this.props.actions.showModal({ name: 'POST_TASK' })
              }
            >
              post a task
            </Button>
          </li>{' '}
          <li className="nav_list_item">
            <Button type="primary">browse task</Button>
          </li>
        </ul>
        <div className="nav_user">
          <div className="user">
            <img src="https://img.icons8.com/ios/100/000000/user.png" />
          </div>
          <div className="app">
            <img src="https://img.icons8.com/ios/50/000000/two-smartphones.png" />
          </div>
        </div>
        {this.props.modal.show && this.props.modal.name === 'POST_TASK' ? (
          <PostTask {...this.props} />
        ) : (
          undefined
        )}
      </nav>
    );
  }
}
