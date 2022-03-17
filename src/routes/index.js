import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login/index';
import Page404 from '../pages/Page404/index';

function Rotas() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}

export default Rotas;
