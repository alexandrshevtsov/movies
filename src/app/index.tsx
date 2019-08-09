import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Details, Movies } from './pages';
import { hot } from 'react-hot-loader';
import './index.scss';

export const App = hot(module)(() => (
  <Switch>
    <Route exact path="/" component={Movies} />
    <Route exact path="/movies" component={Movies} />
    <Route exact path="/movies/:query?" component={Movies} />
    <Route exact path="/movies/:query/:page?" component={Movies} />
    <Route path="/details/:id" component={Details} />
  </Switch>
));
