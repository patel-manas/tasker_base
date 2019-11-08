import * as React from 'react';

interface Props {
  name: string;
}

export default class Banner extends React.Component<Props> {
  render(): JSX.Element | null {
    return (
      <div className="banner">
        <span className="banner__text">Hello {this.props.name}!</span>
      </div>
    );
  }
}
