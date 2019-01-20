import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Media from "react-media";
import { easing } from "popmotion";
import posed from "react-pose";

const names = [
  "HARITH AUGUSTUS.",
  "ANTWON ROSE.",
  "LAVAR DOUGLAS.",
  "JUSTINE DAMOND.",
  "CHARLEENA LYLES.",
  "MANUEL DIAZ.",
  "JOEL ACEVEDO.",
  "STEVEN SCHILTZ.",
  "AMILCAR PEREZ-LOPEZ.",
  "JOHN HERNANDEZ.",
  "MICHAEL JEFFERSON.",
  "AUTUMN STEELE.",
  "TASHII BROWN.",
  "NO MORE NAMES."
];

const NamesContainer = styled.div`
  font-family: "Avenir Next";
  z-index: 2000;
  font-weight: 700;
  font-size: 50px;
  color: white;
  background-color: black;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  line-height: 1;
  pointer-events: ${({ fade }) => (fade ? "none" : "auto")};
  opacity: ${({ fade }) => (fade ? "0" : "1")};
  transition: 0.4s ease;
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

function range(number) {
  const arr = [];
  for (var i = 0; i < number; ++i) {
    arr.push(0);
  }
  return arr;
}

const fadeup = keyframes`
  ${(function() {
    return range(names.length)
      .map((e, i, arr) => {
        const p = (((i + 1) / arr.length) * 100) | 0;
        return `
          ${p}% { transform: translate3d(0, calc(-${p}% + 4rem), 0); }
          ${p +
            (1 / arr.length) *
              100 *
              0.4}% { transform: translate3d(0, calc(-${p}% + 4rem), 0); }
        `;
      })
      .join("\n");
  })()}
`;

const ItemContainer = styled.div`
  will-change: transform;
  transform: translate3d(0%);
  white-space: nowrap;
  animation: ${fadeup} 15s ease-in-out;
  animation-fill-mode: forwards;
`;

const Fade = () => (
  <FadeContainer>
    <ItemContainer>
      {names.map((name, i) => (
        <Item>{name}</Item>
      ))}
    </ItemContainer>
  </FadeContainer>
);

const Enter = styled.button`
  position: absolute;
  text-transform: uppercase;
  color: black;
  background-color: white;
  padding: 12px 14px;
  appearance: none;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.1px;
  border: none;
  left: 50%;
  transform: translateX(-50%);
  bottom: 64px;
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fade: false
    };
  }

  render() {
    return (
      <NamesContainer fade={this.state.fade}>
        <Fade />
        <Enter
          onClick={() => {
            this.setState({
              fade: true
            });
            setTimeout(this.props.loaded, 200);
          }}
        >
          Enter the Site ➔
        </Enter>
      </NamesContainer>
    );
  }
}
