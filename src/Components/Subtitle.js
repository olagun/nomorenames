import React from "react";
import Animated from "./Animated";
import styled from "styled-components";

const Subtitle = styled.h3`
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  font-family: "Avenir Next";
  font-weight: 700;
  margin: 0;
  padding: 0;
  color: ${props => (props.red ? "#a11b1c" : "white")};
  overflow: hidden;
`;

export default ({ children, ...props }) => (
  <Subtitle {...props}>
    <Animated>{children}</Animated>
  </Subtitle>
);
