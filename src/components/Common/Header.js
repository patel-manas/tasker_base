import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div className="navBar">
        <nav>
          <div className="logo">
            <Link to="/">LOGO</Link>
          </div>
          <ul className="actions">
            <li>Post Task</li>
            <Link to="/tasks">Browse tasks</Link>
          </ul>
          <div className="profile">
            <div>|_|</div>
            <span>Manas Patel</span>
          </div>
        </nav>
      </div>
    );
  }
}
