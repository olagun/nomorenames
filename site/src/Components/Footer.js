import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../Components/Nav.js";
import SplitText from "react-pose-text";

const RemoveTransform = keyframes`
  to {
    transform: none;
  }
`;

const Footer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 6rem;
  transform: translateY(100%);
  animation: ${RemoveTransform} 0.5s cubic-bezier(1, 0, 0, 1);
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  pointer-events: auto;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

export default class extends Component {
  render() {
    return (
      <Footer>
        <Logo src="/logo-alt.png" />
      </Footer>
    );
  }
}
