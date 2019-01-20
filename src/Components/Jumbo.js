import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SplitText from "react-pose-text";
import { between, fluidRange, darken, opacify, rgba } from "polished";
import variables from "../variables";
import { ThemeProvider } from "styled-components";
import Title from "./Title";
import Text from "./Text";
import P from "./P";

const Jumbo = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: black;
  position: relative;
  display: inline-block;
  height: calc(100vh - 2 * ${variables.navHeight});
`;

const Section = styled.section`
  width: 1024px;
  margin: 0 auto;
  transition: 0.2s ease;
  box-sizing: border-box;

  @media (max-width: ${variables.breakpoints.mobile}) {
    display: block;
    width: 100%;
  }
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
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: 0.2s ease;
  transition-delay: 0.1s;
  opacity: ${({ show }) => (show ? "1" : "0")};
  pointer-events: ${({ show }) => (show ? "auto" : "none")};
`;

const Video = styled.video`
  width: 100%;
  padding: 10px;
  pointer-events: none;
  height: calc(100vh - 144px);
`;

const PeriodContainer = styled.span`
  font: inherit;
  position: relative;
  width: fit-content;

  &::after {
    content: ".";
    position: absolute;
    left: 100%;
    color: #a11b1c;
    transition: 0.2s ease left;
  }
`;

const Period = styled.span`
  font: inherit;
  color: #a11b1c;
  &::after {
    content: ".";
  }
`;

const PlayButtonContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: calc(${variables.navHeight} / 2);
  background-color: rgba(0, 0, 0, 0.5);
  width: fit-content;
  padding-right: 14px;
  transition: 0.2s ease;
  box-shadow: none;
  transform: none;
  margin-top: 32px;

  :hover {
    cursor: pointer;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
    transform: translateX(4px);
  }
`;

const StyledPlayButton = styled.div`
  width: ${variables.navHeight};
  height: ${variables.navHeight};
  display: block;
  background-color: white;
  border-radius: calc(${variables.navHeight} / 2);
  background-image: url(/play.svg);
  background-position: calc(${variables.navHeight} / 2 * 0.55) center;
  background-size: calc(${variables.navHeight} / 2) ${variables.navHeight};
  background-repeat: no-repeat;
`;

const callToAction = ["Inspires", "Invests", "Connects"];

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 50
  }
};

export default class extends Component {
  videoRef = React.createRef();

  state = {
    playVideo: false,
    target: null,
    index: 0
  };

  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          index: (this.state.index + 1) % callToAction.length
        }),
      7000
    );
  }

  render() {
    return (
      <ThemeProvider
        theme={{
          textColor: "rgb(255,255,255)",
          mainColor: "rgb(0,0,0)"
        }}
      >
        <Jumbo>
          <Overlay show={!this.state.playVideo}>
            <Section>
              <Title show={!this.state.playVideo}>
                No
                <Period />
                <br />
                More
                <Period />
                <br />
                Names
                <Period />
                <br />
                <SplitText
                  initialPose="exit"
                  pose="enter"
                  charPoses={charPoses}
                >
                  {callToAction[this.state.index]}
                </SplitText>
                <Period />
              </Title>
              <P show={!this.state.playVideo}>
                We are putting our foot down and saying that enough is enough.
                The cycle cannot continue. We cannot wait any longer. There will
                be no more names.
              </P>
              <PlayButtonContainer
                onClick={() => {
                  this.setState({ playVideo: true });
                  this.videoRef.currentTime = 0;
                  this.videoRef.play();
                }}
              >
                <StyledPlayButton />
                <Text>Play the Video</Text>
              </PlayButtonContainer>
            </Section>
          </Overlay>
          <Video
            autoPlay
            muted
            ref={ref => (this.videoRef = ref)}
            onEnded={evnt => {
              this.setState({ playVideo: false });
              this.videoRef.currentTime = 0;
              this.videoRef.play();
            }}
          >
            <source src="./video.mp4" type="video/mp4" />
          </Video>
        </Jumbo>
      </ThemeProvider>
    );
  }
}
