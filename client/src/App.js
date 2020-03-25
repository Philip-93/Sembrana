import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Productos from "./components/Productos";
import NuestraHistoria from "./components/NuestraHistoria";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contactanos from "./components/Contactanos";
import "./styles/main.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Productos" component={Productos} />
          <Route path="/Historia" component={NuestraHistoria} />
          <Route path="/Contactanos" component={Contactanos} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}
