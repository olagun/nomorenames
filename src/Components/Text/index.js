import styled from "styled-components";

const Text = styled.span`
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 2px;
  font-family: "Avenir Next";
  font-weight: 700;
  margin: 0 16px;
  color: ${props => props.theme.textColor};
`;

export default Text;
