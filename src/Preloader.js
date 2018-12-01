import React, { Component } from "react";
import logo from "./logo.svg";
import styled, { keyframes } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Media from "react-media";
import { Events } from "react-scroll";
import posed, { PoseGroup } from "react-pose";

const NamesContainer = styled.div`
  font-family: "Avenir Next";
  font-weight: 700;
  font-size: 50px;
  color: white;
  background-color: black;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  line-height: 1;
  overflow: hidden;
`;

const ScreenMargin = styled.div`
  height: 100vh;
`;

const FadeContainer = styled.div`
  height: 4rem;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Item = styled.div`
  height: 4rem;
  font-size: 3rem;
  text-align: center;
`;

const ItemContainer = styled(
  posed.div({
    enter: {
      y: "calc(-100% + 4rem)",
      delay: 300,
      transition: {
        default: { duration: 20000 }
      }
    }
  })
)`
  transform: translateY(0%);
  white-space: nowrap;
`;

class Fade extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      names: null
    };
  }

  async componentDidMount() {
    const data = await (await fetch("/names.txt")).text();
    const names = data.split("\n");
    names.pop();

    this.setState({
      isLoaded: true,
      names
    });
  }

  render() {
    return (
      <FadeContainer>
        <PoseGroup>
          {this.state.isLoaded && (
            <ItemContainer key={0}>
              {this.state.names.map((name, i) => (
                <Item>{name}</Item>
              ))}
            </ItemContainer>
          )}
        </PoseGroup>
      </FadeContainer>
    );
  }
}

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateY: 0
    };
  }

  render() {
    return (
      <NamesContainer>
        <Fade />
      </NamesContainer>
    );
  }
}
