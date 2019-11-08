// src/index.tsx
import 'core-js/shim';
import 'regenerator-runtime/runtime';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Banner from './components/Banner/Banner';

ReactDOM.render(
  <div>
    <Banner name="sjnjknsnj" />
  </div>,
  document.getElementById('app')
);
