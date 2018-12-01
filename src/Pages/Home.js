import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Nav from "../Nav";
import Jumbo from "../Components/Jumbo";
import Story from "../Components/Story";

export default class extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbo />
        <Story />
      </div>
    );
  }
}
