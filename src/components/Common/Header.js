import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PostTask from './PostTask';
export default class Header extends Component {
  render() {
    return (
      <div className="navBar">
        <nav>
          <div className="logo">
            <Link to="/">LOGO</Link>
          </div>
          <ul className="actions">
            <li onClick={() => this.props.actions.showModal()}>Post Task</li>
            <li>
              <Link to="/tasks">Browse tasks</Link>
            </li>
          </ul>
          <div className="profile">
            <div>|_|</div>
            <span>Manas Patel</span>
          </div>
        </nav>
        {this.props.modal.show ? <PostTask {...this.props} /> : undefined}
      </div>
    );
  }
}
