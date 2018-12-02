import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../Components/Nav.js";
import SplitText from "react-pose-text";
import Footer from "../Components/Footer";

const cubicEasing = "cubic-bezier(1, 0, 0, 1)";

const FullContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 9rem);
`;

const fade = keyframes`
from {
  transform: translateY(100%);
}

to {
  transform: translateY(0%);
}
`;

const AnimatedText = styled.div`
  animation: ${fade} 1s ${cubicEasing};
`;
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

const SubtitleContainer = styled.h3`
  font-family: "Avenir Next";
  margin: 0;
  font-size: 18px;
  color: ${props => (props.red ? "#a11b1c" : "white")};
  margin: 0;
  overflow: hidden;
`;

const Subtitle = ({ children, ...props }) => (
  <SubtitleContainer {...props}>
    <AnimatedText>{children}</AnimatedText>
  </SubtitleContainer>
);

const MainTitleContainer = styled.h1`
  font-family: "Avenir Next Condensed";
  color: white;
  font-weight: 300;
  font-size: 56px;
  margin: 0;
  line-height: 1;
  overflow: hidden;
`;

const MainTitle = ({ children }) => (
  <MainTitleContainer>
    <AnimatedText>{children}</AnimatedText>
  </MainTitleContainer>
);

const InfoContainer = styled.section`
  grid-column: 1;
  grid-row: 1 /3;
  // padding-top: 32px;
  // margin-top: 32px;
`;

const Info = styled.div`
  // margin-bottom: 32px;
  padding: 32px;
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
  font-size: 18px;
  line-height: 28px;
  margin-top: ${props => (props.space ? "32px" : "0")};
`;

const BoldTextContainer = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;
  overflow: hidden;
`;

const BoldText = ({ children }) => (
  <BoldTextContainer>
    <AnimatedText>{children}</AnimatedText>
  </BoldTextContainer>
);

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

const UniversityOption = ({ onClick, university, active }) => (
  <StyledOption active={active} onClick={() => onClick(university)}>
    {university}
  </StyledOption>
);

const PaneContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 2fr;
  margin-top: 24px;
  grid-column-gap: 32px;
`;

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
  onClick = currentUniversity => {
    this.setState({
      currentUniversity
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
        <FullContainer>
          <Nav />
          <Container>
            <TitleContainer>
              <TitleGroup>
                <Subtitle>How to</Subtitle>
                <MainTitle>Contact Us</MainTitle>
              </TitleGroup>
            </TitleContainer>
            <MainContainer>
              <HorizontalContainer>
                <TitleGroup>
                  <Subtitle red>Telephone</Subtitle>
                  <BoldText>+1 (407)-704-9845</BoldText>
                </TitleGroup>
                <TitleGroup>
                  <Subtitle red>Email</Subtitle>
                  <TallText>chris@nomorenames.co</TallText>
                </TitleGroup>
              </HorizontalContainer>
            </MainContainer>
          </Container>
        </FullContainer>
        <Footer />
      </div>
    );
  }
}
