import { lazy } from 'react';

import App from './App';

const Home = lazy(() => import(/* webpackChunkName: "home" */ './home'));

const Tasks = lazy(() => import(/* webpackChunkName: "product" */ './Tasks'));

export { App, Home, Tasks };
