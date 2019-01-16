import React from "react";
import styled from "styled-components";
import variables from "../variables";
import posed, { PoseGroup } from "react-pose";

const Timeline = styled.div`
  padding: 16px 0;
  display: grid;
  grid-auto-flow: column;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  @media (max-width: ${variables.breakpoints.desktop}) {
    display: block;
    border-top: none;
  }
`;

const TimelineItem = styled(
  posed.div({
    enter: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        delay: 1
      }
    }
  })
)`
  padding: 24px 32px;
  @media (max-width: ${variables.breakpoints.desktop}) {
    padding:0;
  }
`;

const TimelineYear = styled.h1`
  position: relative;
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-family: "Avenir Next Condensed";
  font-size: 40px;

  ::after {
    content: "";
    position: absolute;
    top: -45px;
    left: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #a11b1c;
  }

  @media (max-width: ${variables.breakpoints.desktop}) {
    ::after {
      top: 50%;
      transform: translateY(-50%);
      left: -37px;
    }
  }
`;

const TimelineTitle = styled.h1`
  color: black;
  margin: 0;
  padding: 0;
  font-weight: 100;
  font-size: 24px;
`;

const TimelineText = styled.p`
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.65);
`;

export default ({ data = [] }) => (
  <Timeline>
    <PoseGroup config={{ flip: true }}>
      {data.map(({ year = "", title = "", text = "" }, i) => (
        <TimelineItem key={i}>
          <TimelineYear>{year}</TimelineYear>
          <TimelineTitle>{title}</TimelineTitle>
          <TimelineText>{text}</TimelineText>
        </TimelineItem>
      ))}
    </PoseGroup>
  </Timeline>
);
