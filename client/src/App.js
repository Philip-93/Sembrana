import React, { Component } from "react";
import Navigation from "./components/Navigation";
import "./styles/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
      </Router>
    );
  }
}
