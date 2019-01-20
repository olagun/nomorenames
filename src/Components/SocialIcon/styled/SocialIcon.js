import styled from "styled-components";
import variables from "../../../variables";
import { darken } from "polished";

const SocialIcon = styled.a`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;

  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: center center;
  transition: 0.2s ease background-color;

  &:hover {
    background-color: ${props => darken(0.1, props.theme.mainColor)};
  }

  @media (max-width: ${variables.breakpoints.mobile}) {
    &:hover {
      background-color: transparent;
    }
  }
`;

export default SocialIcon;
