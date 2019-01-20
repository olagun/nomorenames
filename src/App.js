import React, { Component } from "react";
import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Events from "./Pages/Events";
import ComingSoon from "./Pages/ComingSoon";
import { createGlobalStyle } from "styled-components";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  body {
    padding-top: ${variables.navHeight};
  }

  @media(max-width: ${variables.breakpoints.mobile}) {
    body {
      padding-top: ${variables.navHeightMobile};
    }
  }
`;

export default () => (
  <div>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/events" component={ComingSoon} />
        <Route path="/merch" component={ComingSoon} />
        <Route path="/donate" component={ComingSoon} />
      </Switch>
    </Router>
  </div>
);
