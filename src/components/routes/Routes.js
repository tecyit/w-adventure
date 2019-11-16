import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Auth/Login';
import Signup from '../../pages/Auth/Signup';

const Routes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
  </>
);

export default Routes;
