import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Users from './layouts/users';
import Login from './layouts/login';
import Main from './layouts/main';
import EditUserPage from './components/page/editUserPage/editUserPage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/users/:userId?/edit' component={EditUserPage} />
        <Route path='/users/:userId?' component={Users} />
        <Route path='/login/:type?' component={Login} />
        <Route path='/main' exact component={Main} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default App;
