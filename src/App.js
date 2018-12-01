import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Events from "./Pages/Events";
import Preloader from "./Preloader";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false
    };
  }

  isLoaded() {
    this.setState({ isLoaded: true });
  }
  render() {
    return (
      <div>
        <Preloader loaded={this.isLoaded.bind(this)} />
        {this.state.isLoaded && (
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/events" component={Events} />
            </Switch>
          </Router>
        )}
      </div>
    );
  }
}
