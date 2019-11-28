import React, { Component } from 'react';
import { Col } from 'antd';

export default class TaskList extends Component {
  render() {
    return (
      <Col span={4}>
        <div
          style={{
            width: '100%'
          }}
        >
          Tasks
        </div>
      </Col>
    );
  }
}
