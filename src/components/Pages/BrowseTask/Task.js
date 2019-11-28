import React, { Component } from 'react';
import { Card } from 'antd';

export default class Task extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('--', this.props);
    return (
      <React.Fragment>
        {this.props.list.map(t => {
          return (
            <Card
              className={
                t.selected === true ? 'card-layout cyan' : 'card-layout '
              }
              size="small"
              style={{
                width: '80%',
                height: '100px',
                margin: '10px 0px',
                cursor: 'pointer'
              }}
              onClick={() => this.props.cardSelected(t.id)}
              key={t.id}
            >
              <p>{t.title}</p>
              <p>{t.offers[0].amount}</p>
            </Card>
          );
        })}
      </React.Fragment>
    );
  }
}
