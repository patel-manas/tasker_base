// src/index.tsx
import 'core-js';
import 'regenerator-runtime/runtime';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import './assets/sass/Banner.scss';
import store from './store';
import Login from './components/Pages/Login/Login';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Login />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
