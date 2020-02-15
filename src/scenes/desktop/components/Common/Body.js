import React from 'react';

export default class Body extends React.Component {
  render() {
    return <div className="body">{this.props.children}</div>;
  }
}

// Components to be added are Loader, common alerts , backToTop
