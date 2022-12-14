import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Users from './layouts/users';
import Login from './layouts/login';
import Main from './layouts/main';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/main' component={Main} />
        <Route path='/login' component={Login} />
        <Route path='/users/:userId?' component={Users} />
      </Switch>
    </div>
  );
};

export default App;
