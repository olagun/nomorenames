import React from "react";
import Animated from "./Animated";
import styled from "styled-components";

const Subtitle = styled.h3`
  font-family: "Avenir Next";
  font-weight: 500;
  margin: 0;
  font-size: 18px;
  color: ${props => (props.red ? "#a11b1c" : "white")};
  margin: 0;
  overflow: hidden;
`;

export default ({ children, ...props }) => (
  <Subtitle {...props}>
    <Animated>{children}</Animated>
  </Subtitle>
);
