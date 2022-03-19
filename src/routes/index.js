import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login/index';
import Page404 from '../pages/Page404/index';

function Rotas() {

  return (
    <Switch>
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}

export default Rotas;
