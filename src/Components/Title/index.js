import { between, rgba } from "polished";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-famiy: "Avenir Next";
  font-weight: 900;
  font-size: ${between("53px", "60px", "375px", "1024px")};
  line-height: ${between("48px", "60px", "375px", "1024px")};
  letter-spacing: ${between("1px", "3px", "375px", "1024px")};
  color: ${props => props.theme.textColor};
  text-shadow: 5px 5px 0 ${props => rgba(props.theme.textColor, 0.1)};
  transition: 0.2s cubic-bezier(1, 0, 0, 1);
  transform: translateY(${({ show = true }) => (show ? "0px" : "-24px")});
  opacity: ${({ show = true }) => (show ? "1" : "0")};

  @media (max-width: 1240px) {
    margin-bottom: 24px;
  }
`;

export default Title;
