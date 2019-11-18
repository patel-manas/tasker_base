import React, { Component } from 'react';
import './Banner.scss';

export default class BannerComponent extends Component {
  render() {
    return (
      <div className="banner">
        <img
          className="body-img"
          src={require('../../../../assets/images/home-repair.jpg')}
        />
      </div>
    );
  }
}
