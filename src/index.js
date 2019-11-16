// src/index.tsx
import 'core-js';
import 'regenerator-runtime/runtime';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import './assets/sass/_main.scss';
import store from './store';
import Home from './containers/home';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Home />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
