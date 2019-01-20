import styled from "styled-components";
import { between } from "polished";
import variables from "../../variables";

const P = styled.p`
  font-size: ${between("18px", "17px", "375px", "1024px")};
  line-height: ${between("28px", "26px", "375px", "1024px")};
  color: ${props => props.theme.textColor};
  width: ${between("200px", "330px", "375px", "1024px")};

  padding: 0;
  transition: 0.2s cubic-bezier(1, 0, 0, 1);
  transform: translateY(${({ show = true }) => (show ? "0px" : "-4px")});
  opacity: ${({ show = true }) => (show ? "1" : "0")};

  @media (max-width: ${variables.breakpoints.mobile}) {
    width: 100%;
  }
`;

export default P;
