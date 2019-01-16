import React from "react";
import styled from "styled-components";

const Period = styled.span`
  font: inherit;
  color: #a11b1c;
  &::after {
    content: ".";
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  font-weight: 900;
  font-family: "Avenir Next";
  text-transform: uppercase;
  font-size: 90px;
  display: grid;
  align-items: center;
  justify-content: center;
`;

export default () => (
  <Container>
    <div>
    Coming Soon
    <Period /></div>
  </Container>
);
