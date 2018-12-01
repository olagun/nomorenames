import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Jumbo = styled.div`
  width: 100%;
  height: calc(100vh - 48px);
  background-color: black;
  position: relative;
`;

const Section = styled.section`
  width: 1024px;
  margin: 0 auto;
`;

const Overlay = styled.div`
  background: linear-gradient(
    to right,
    rgba(189, 63, 50, 0.5),
    rgba(203, 53, 107, 0.4)
  );
  position: absolute;
  display: grid;
  align-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Video = styled.iframe`
  width: 100%;
  height: calc(100vh - 48px);
`;

const Title = styled.h1`
  margin: 0;
  color: white;
  text-transform: uppercase;
  font-size: 112px;
  font-famiy: "Avenir Next";
  font-weight: 900;
  line-height: 0.8;
  text-shadow: 7px 7px 0 rgba(255, 255, 255, 0.05);
`;

const Period = styled.span`
  font: inherit;
  color: #a11b1c;
  &::after {
    content: ".";
  }
`;

const Statement = styled.p`
  font-family: "Sentinel";
  font-size: 22px;
  color: white;
  width: 400px;
  line-height: 1.4;
`;

const PlayButton = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 90 90"
    fill="white"
    width="64"
    height="64"
  >
    <path d="M45,0A45,45,0,1,0,90,45,45,45,0,0,0,45,0ZM36.72,56.65V33.35L57.28,45Z" />
  </svg>
);

const StyledPlayButton = styled(PlayButton)`
  fill: red;
  width: 48px;
  height; 48px;
`;

export default class extends Component {
  render() {
    return (
      <Jumbo>
        <Overlay>
          <Section>
            <Title>
              No
              <Period />
              <br />
              More
              <Period />
              <br />
              Names
              <Period />
            </Title>
            <Statement>
              We are putting our foot down and saying that enough is enough. The
              cycle cannot continue. We cannot wait any longer. There will be no
              more names.
            </Statement>
            <StyledPlayButton />
          </Section>
        </Overlay>
        <Video
          width="1440"
          height="821"
          src="https://www.youtube.com/embed/XgfXGtug4B8"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Jumbo>
    );
  }
}
