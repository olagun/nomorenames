import React from "react";
import Animated from "./Animated";
import styled from "styled-components";

const BoldText = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  overflow: hidden;
`;

export default ({ children }) => (
  <BoldText>
    <Animated>{children}</Animated>
  </BoldText>
);
