import React from "react";
import Animated from "./Animated";
import styled from "styled-components";

const MainTitle = styled.h1`
  font-family: "Avenir Next Condensed";
  color: white;
  font-weight: 300;
  font-size: 56px;
  margin: 0;
  line-height: 1;
  overflow: hidden;
`;

export default ({ children }) => (
  <MainTitle>
    <Animated>{children}</Animated>
  </MainTitle>
);
