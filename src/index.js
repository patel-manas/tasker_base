// src/index.tsx
import 'core-js';
import 'regenerator-runtime/runtime';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './assets/less/main.less';
import store from './store';
import SuspenseComponent from './components/Common/Suspense';
import * as Routes from './containers/index';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Routes.App>
          <Switch>
            <Route exact path="/" component={SuspenseComponent(Routes.Home)} />
            <Route
              exact
              path="/tasks/:name?"
              component={SuspenseComponent(Routes.Tasks)}
            />
          </Switch>
        </Routes.App>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
