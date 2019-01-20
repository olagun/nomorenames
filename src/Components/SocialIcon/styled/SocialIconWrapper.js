import styled from "styled-components";
import variables from "../../../variables";

const SocialIconWrapper = styled.div`
  display: flex;
  width: ${variables.navHeight};
  height: ${variables.navHeight};
  padding: 8px;

  @media (max-width: ${variables.breakpoints.mobile}) {
    border-bottom: none;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

export default SocialIconWrapper;
