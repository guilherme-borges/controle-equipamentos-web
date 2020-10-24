import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Equipaments from './pages/Equipaments';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/equipamentos" component={Equipaments} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;