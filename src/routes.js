import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Tasks from './pages/Tasks';
import User from './pages/User';
import Users from './pages/Users';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Tasks} />
        <Route path="/users" exact component={Users} />
        <Route path="/user/:userId" component={User} />
      </Switch>
    </BrowserRouter>
  );
}
