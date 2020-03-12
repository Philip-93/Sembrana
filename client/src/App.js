import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import "./styles/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
      </Router>
    );
  }
}
