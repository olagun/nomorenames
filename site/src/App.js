import React from "react";
import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Events from "./Pages/Events";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/events" component={Events} />
      </Switch>
    </Router>
  </div>
);