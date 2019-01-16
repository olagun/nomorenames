import styled, { keyframes } from "styled-components";

const cubicEasing = "cubic-bezier(1, 0, 0, 1)";
const fade = keyframes`
from {
  transform: translateY(100%);
}

to {
  transform: translateY(0%);
}
`;

export default styled.div`
  animation: ${fade} 1s ${cubicEasing};
`;
