import React, { Component } from 'react';

import { Radio } from 'antd';

import Task from './Task';

export default class TaskList extends Component {
  onChange = e => {
    console.log(`radio checked:${e.target.value}`);
  };
  constructor() {
    super();
    mockTasks[0].selected = true;
    this.state = {
      allTask: mockTasks
    };
  }
  onCardSelect = id => {
    console.log({ id });
    let _mockTasks = [...this.state.allTask];
    _mockTasks.forEach(t => (t.selected = t.id === id ? true : false));
    this.setState({ allTask: _mockTasks });
  };
  render() {
    return (
      <div className="task-list">
        <div className="cat-btn-grp">
          <Radio.Group onChange={this.onChange} defaultValue="a">
            <Radio.Button value="a">Open</Radio.Button>
            <Radio.Button value="b">Asigned</Radio.Button>
            <Radio.Button value="c">Closed</Radio.Button>
          </Radio.Group>
        </div>
        <Task list={this.state.allTask} cardSelected={this.onCardSelect} />
      </div>
    );
  }
}

var mockTasks = [
  {
    title: 'find a girl for me',
    id: 101,
    selected: false,
    location: {
      place: 'marathali',
      lat: '12.953053',
      long: '77.648020'
    },
    status: 'Active',
    offers: [
      {
        amount: 500,
        from: 'user 2'
      }
    ]
  },
  {
    title: 'find a boy for me',
    id: 102,
    selected: false,
    location: {
      place: 'domlur',
      lat: '12.956053',
      long: '77.658020'
    },
    status: 'Assigned',
    offers: [
      {
        amount: 1200,
        from: 'user 1'
      }
    ]
  }
];
