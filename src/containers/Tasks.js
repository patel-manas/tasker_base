import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TasksComponent from '../components/Pages/BrowseTask/BrowseTask';
// import TasksComponent from '../components/Pages/Tasks/ActiveTasks';
// import TasksComponent from '../components/Pages/Tasks/Tasks';
// import TasksComponent from '../components/Pages/Tasks/TaskDetails';

export class TasksContainer extends Component {
  render() {
    return <TasksComponent />;
  }
}

export default connect(
  state => {
    return {
      isFetching: state.isFetching
    };
  },
  dispatch => {
    return {
      actions: bindActionCreators(dispatch)
    };
  }
)(TasksContainer);
