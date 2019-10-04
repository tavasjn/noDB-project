import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Learn from './Components/Learn/Learn'
import MyFleet from "./Components/MyFleet/MyFleet";
import RocketPage from './Components/RocketPage/RocketPage';




export default (
  <Switch>
    <Route component={Home} exact path='/'/>
    <Route component={Learn} path='/learn'/>
    <Route component={MyFleet} path='/MyFleet'/>
    <Route component={RocketPage} path='/RocketPage'/>
  </Switch>
);