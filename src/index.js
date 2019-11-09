// src/index.tsx
import 'core-js';
import 'regenerator-runtime/runtime';
import ReactDOM from 'react-dom';
import React from 'react';
import AppComp from './container/app';
import HomeComp from './container/home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/about">
        <AppComp />
      </Route>
      <Route path="/users">
        <HomeComp />
      </Route>
      <Route path="/">
        <AppComp />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('app')
);
