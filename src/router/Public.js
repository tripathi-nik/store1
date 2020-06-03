import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../AppHome';
import ProductDetail from '../containers/productList/ProdutList';
import Signup from '../containers/account/Signup';
import Dashboard from '../containers/userdashboard/Dashboard';
export default function BasicExample() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/products/:prodId" component = {ProductDetail} />
      <Route exact path="/signup/" component = {Signup} />
      <Route exact path="/user/:userSlug" component = {Dashboard} />
    </Switch>
  );
}
