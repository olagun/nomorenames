import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import YouTube from "react-youtube";
import SplitText from "react-pose-text";

const Jumbo = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: black;
  position: relative;
  // float: right;
  display: inline-block;
  height: calc(100vh - 120px);
  // margin: 0;

  // @media (max-width: 1240px) {
  //   display: block;
  //   padding: 64px;
  // }
`;

const Section = styled.section`
  width: 1024px;
  margin: 0 auto;
  transition: 0.2s ease;
  box-sizing: border-box;

  @media (max-width: 1240px) {
    display: block;
    width: auto;
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

const Title = styled.h1`
  margin: 0;
  color: white;
  text-transform: uppercase;
  font-size: 112px;
  font-famiy: "Avenir Next";
  font-weight: 900;
  font-size: 100
  line-height: 0.8;
  text-shadow: 7px 7px 0 rgba(255, 255, 255, 0.05);
  transition: 0.2s cubic-bezier(1, 0, 0, 1);
  transform: translateY(${({ show }) => (show ? "0px" : "-24px")});
  opacity: ${({ show }) => (show ? "1" : "0")};

  @media (max-width: 1240px) {
    font-size: 64px;
    line-height: 1;
    margin-bottom: 24px;
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
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0.5);
  width: fit-content;
  padding-right: 14px;
  transition: 0.2s ease;
  box-shadow: none;
  transform: none;

  :hover {
    cursor: pointer;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
    transform: translateX(4px);
  }
`;

const Text = styled.span`
  text-transform: uppercase;
  color: white;
  margin-left: 8px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.8px;
`;

const Statement = styled.p`
  font-family: "IBM Plex Serif";
  font-size: 16px;
  color: white;
  width: 400px;
  padding: 0;
  line-height: 1.4;
  transition: 0.2s cubic-bezier(1, 0, 0, 1);
  transform: translateY(${({ show }) => (show ? "0px" : "-4px")});
  opacity: ${({ show }) => (show ? "1" : "0")};

  @media (max-width: 1240px) {
    width: auto;
  }
`;

const StyledPlayButton = styled.div`
  width: 48px;
  height: 48px;
  display: block;
  background-color: white;
  border-radius: 24px;
  background-image: url(/play.svg);
  background-position: 13px center;
  background-size: 24px 24px;
  background-repeat: no-repeat;
`;

const callToAction = ["Inspires", "Educates", "Engages"];

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
      4000
    );
  }

  render() {
    return (
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
              <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                {callToAction[this.state.index]}
              </SplitText>
              <Period />
            </Title>
            <Statement show={!this.state.playVideo}>
              We are putting our foot down and saying that enough is enough. The
              cycle cannot continue. We cannot wait any longer. There will be no
              more names.
            </Statement>
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
    );
  }
}