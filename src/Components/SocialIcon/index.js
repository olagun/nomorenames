import styled from "styled-components";
import variables from "../../variables";
import { darken } from "polished";

const SocialIcon = styled.a`
  width: ${variables.navHeight};
  height: ${variables.navHeight};
  object-fit: contain;

  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: center center;
  transition: 0.1s ease background-color;

  &:hover {
    background-color: ${props => darken(0.1, props.theme.mainColor)};
  }

  @media (max-width: 1240px) {
    border-bottom: none;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    &:hover {
      background-color: transparent;
    }
  }
`;

export default SocialIcon;
