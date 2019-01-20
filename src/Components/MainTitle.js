import React from "react";
import Animated from "./Animated";
import styled from "styled-components";
import { between } from "polished";

const MainTitle = styled.h1`
  font-weight: 300;
  margin: 0;
  margin-top: 16px;
  letter-spacing: -1.5px;
  color: ${props => props.theme.textColor};
  font-size: ${between("48px", "56px", "375px", "1024px")};
  line-height:  ${between("56px", "64px", "375px", "1024px")};

  overflow: hidden;
`;

export default ({ children }) => (
  <MainTitle>
    <Animated>{children}</Animated>
  </MainTitle>
);
