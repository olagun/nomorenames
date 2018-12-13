import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Nav from "../Components/Nav.js";
import Jumbo from "../Components/Jumbo";
import Story from "../Components/Story";
import Preloader from "../Preloader";
import Footer from "../Components/Footer";

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
        {/* {!this.state.isLoaded && <Preloader loaded={this.isLoaded.bind(this)} />} */}
        <Nav />
        <Jumbo />
        <Story />
        <Footer />
      </div>
    );
  }
}
