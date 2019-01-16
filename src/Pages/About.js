import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import SplitText from "react-pose-text";
import BoldText from "../Components/BoldText";
import AnimatedText from "../Components/Animated";
import Subtitle from "../Components/Subtitle";
import MainTitle from "../Components/MainTitle";
import Timeline from "../Components/Timeline";
import posed, { PoseGroup } from "react-pose";
import text from "../about";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto;
  width: 100%;
  background-color: #f7f6f6;

  @media (max-width: 1240px) {
    display: block;
  }
`;

const TitleContainer = styled.hgroup`
  background-color: #a11b1c;
  grid-column: 2;
  grid-row: 1;
  width: 100%;
  height: 100%;
  padding: 64px 32px;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => (props.space ? "16px" : "0")};
`;

const InfoContainer = styled.section`
  grid-column: 2;
  // padding-top: 32px;
  // margin-top: 32px;
`;

const Info = styled.div`
  // margin-bottom: 32px;
  padding: 32px;
  background-color: white;
`;

const LogoContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 8px;
  align-items: center;
  margin-bottom: 32px;
`;

const Underline = styled.span`
  border-bottom: 4px solid #a11b1c;
`;

const Text = styled.div`
  font-family: "IBM Plex Serif";
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  margin-top: ${props => (props.space ? "32px" : "0")};
`;

const MainContainer = styled.section`
  background-color: white;
  padding: 24px 32px;
  grid-column: 2;
  grid-row: 2;
`;

const Logo = styled.img`
  width: 100%;
`;

const HorizontalContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 16px;
  margin-top: ${props => (props.space ? "32px" : 0)};

  @media (max-width: 1240px) {
    grid-auto-flow: row;
    grid-row-gap: 16px;
  }
`;

const TallTextContainer = styled.span`
  font-family: "Avenir Next Condensed";
  font-size: 24px;
  overflow: hidden;
`;

const TallText = ({ children }) => (
  <TallTextContainer>
    <AnimatedText>{children}</AnimatedText>
  </TallTextContainer>
);

const ProfileImage = styled.img`
  width: 100%;
`;

const LeftContainer = styled.div`
  grid-column: 1;
  padding: 32px;
`;

const RightContainer = styled.div`
  grid-column: 2;
  background-color: white;
  padding: 32px;
`;

const StyledOption = styled.div`
  width: 100%;
  padding: 8px 16px;
  font-size: 20px;
  font-family: "Avenir Next Condensed";
  border-left: ${props =>
    props.active ? "4px solid black" : "4px solid transparent"};
    cursor: pointer;
    color: rgba(0, 0, 0, ${props => (props.active ? "1" : ".5")});
  // font-weight: ${props => (props.active ? "500" : "normal")};
  transition: 0.2s ease;
  background-color: rgba(0, 0, 0, ${props => (props.active ? "0.05" : "0")});

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const TallName = styled.h1`
  font-size: 56px;
  font-family: "Avenir Next Condensed";
  font-weight: normal;
  text-transform: uppercase;
  margin: 0;
  margin-top: 16px;
`;

const UniversityOptions = styled.div`
  display: grid;
  grid-auto-flow: rows;
  background-color: #f2f2f2;
  padding: 16px 0;
  margin-top: 32px;
`;

const UniversityOption = ({ onClick, option, index, active }) => (
  <StyledOption active={active} onClick={() => onClick(index)}>
    {option}
  </StyledOption>
);

const PaneContainer = styled.div`
  display: block;
  margin-top: 24px;

  @media (max-width: 1240px) {
    display: block;
  }
`;

const PaneInner = styled(posed.div())``;

const Pane = ({ title, current, children }) => (
  <PaneInner pose={title === current ? "enter" : "exit"}>{children}</PaneInner>
);

const LeftAlign = styled.div`
  grid-column: 1;
`;

const RightAlign = styled.div`
  grid-column: 2;
`;

const VerticalContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  margin-top: 16px;
  grid-row-gap: 16px;
`;

export default class extends Component {
  state = {
    currIndex: 0,
    members: ["Excite", "Engage", "Invest"]
  };

  onClick = currIndex => {
    this.setState({
      currIndex
    });
  };

  render() {
    const charPoses = {
      exit: { opacity: 0, y: 10 },
      enter: {
        opacity: 1,
        y: 0,
        delay: ({ wordIndex }) => wordIndex * 200 + 100
      }
    };

    return (
      <div>
        <Nav />
        <Container>
          <TitleContainer>
            <TitleGroup>
              <Subtitle>What We're</Subtitle>
              <MainTitle>About</MainTitle>
            </TitleGroup>
          </TitleContainer>
          <InfoContainer>
            <Info>
              <TitleGroup>
                <Subtitle red>Our</Subtitle>
                <BoldText>
                  <Underline>Who</Underline> We Are
                </BoldText>
              </TitleGroup>
              <Text space>
                No More Names is an organization that uses benefit concerts as a
                means to build awareness and raise funds to support the fight
                against police brutality. The organization was founded by
                Harvard students in 2018, where they had a concert featuring
                students, members from the boys and girls club, Vic Mensa,
                Jeremy Lin and Dr. Harry Edwards (Organizer of the 1968 Olympic
                Protest and Cornell Alumnus). At this event they were able to
                raise $7000.
              </Text>
            </Info>
          </InfoContainer>
        </Container>
        <Container>
          <LeftContainer>
            <Subtitle red>What We Do</Subtitle>
            <UniversityOptions>
              {this.state.members.map((e, index) => (
                <UniversityOption
                  onClick={this.onClick.bind(null, index)}
                  option={e}
                  index={index}
                  active={index === this.state.currIndex}
                />
              ))}
            </UniversityOptions>
          </LeftContainer>
          <RightContainer>
            <TallName>
              <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                {this.state.members[this.state.currIndex]}
              </SplitText>
            </TallName>

            <PaneContainer>
              <Timeline data={text[this.state.members[this.state.currIndex]]} />
            </PaneContainer>
          </RightContainer>
        </Container>
        <Footer />
      </div>
    );
  }
}
