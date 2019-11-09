// src/index.tsx
import 'core-js';
import 'regenerator-runtime/runtime';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import React from 'react';
import AppComp from './components/Pages/Home/Banner/Banner';
import Home from './components/Pages/Home/Banner/Menu';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './assets/sass/Banner.scss';

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
        <Home />
      </Route>
      <Route path="/">
        <AppComp />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
