import React from 'react';
import './Category.scss';

export default function Category(props) {
  return (
    <div className="cat-wrapper">
      {/* <div className="cat-circle circle" /> */}
      <div className="cat-icon">
        <img src={require(`../../../../assets/images/${props.image}`)} />
      </div>
      <div className="cat-desc">{props.name}</div>
    </div>
  );
}
