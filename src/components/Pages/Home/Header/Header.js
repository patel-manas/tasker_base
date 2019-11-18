import React, { Component } from 'react';
import './Header.scss';
import * as CategoriesData from '../../../../assets/data/category.json';
import Category from '../Category/Category';

export default class Header extends Component {
  render() {
    console.log({ CategoriesData });
    return (
      <React.Fragment>
        <div className="navBar">
          <nav>
            <div className="logo">
              <a href="#">LOGO</a>
            </div>
            <ul className="actions">
              <li>Post Task</li>
              <li>Browse tasks</li>
            </ul>
            <div className="profile">
              <div>|_|</div>
              <span>Manas Patel</span>
            </div>
          </nav>
        </div>
        <div className="banner">
          <img
            className="body-img"
            src={require('../../../../assets/images/home-repair.jpg')}
          />
        </div>
        <div className="categories">
          <div className="categories-desc">
            Post a popular category or fresh category task
          </div>
          <div className="categories-list">
            {CategoriesData.default.map(cat => (
              <Category {...cat} key={cat.cat_id} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
