import React, { Component } from 'react';
import TaskDetails from './TaskDetails';
import TaskList from './TaskList';
import FullPane from '../../Common/FullPane';
import { Col } from 'antd';

export default class ActiveTasks extends Component {
  render() {
    return (
      <FullPane>
        <Col span={5} />
        <TaskList />
        <TaskDetails />
      </FullPane>
    );
  }
}
