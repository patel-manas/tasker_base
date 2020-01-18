import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskDetails from './TaskDetails';

import '../../../assets/less/browseTask.less';
export default class BrowseTask extends Component {
  render() {
    return (
      <div className="browse-task">
        <TaskList />
        <TaskDetails />
      </div>
    );
  }
}
