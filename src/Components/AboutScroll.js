import React, { PureComponent } from "react";
import styled, { ThemeProvider } from "styled-components";
import text from "../about";
import SplitText from "react-pose-text";
import Timeline from "./Timeline";
import Subtitle from "./Subtitle";
import Media from "react-media";
import variables from "../variables";
import MainTitle from "./MainTitle";

const UniversityOptions = styled.div`
  position: sticky;
  top: 88px;
  display: grid;
  grid-auto-flow: rows;
  padding: 16px 0;
  margin-top: 32px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);
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

const RightContainer = styled.div`
  grid-column: 2;
  background-color: white;
  padding: 16px 32px;
`;

const charPoses = {
  exit: { opacity: 0, y: 10 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ wordIndex }) => wordIndex * 200 + 100
  }
};

const LeftContainer = styled.div`
  grid-column: 1;
  padding: 32px;
  height: 100%;
`;

const keys = Object.keys(text);
const offset = 0.5;

class AboutScroll extends PureComponent {
  references = [];
  state = { currKey: keys[0] };
  half = window.innerHeight * offset;

  onClick = index => {
    window.scrollTo({
      top: this.references[index].ref.offsetTop - 100,
      behavior: "smooth"
    });

    // this.references[index].ref.scrollTo({ behavior: "smooth" });
    this.setState({ currKey: keys[index] });
  };

  _handleResize = () => (this.half = window.innerHeight * offset);

  _handleScroll = () => {
    let i = 0;
    let refs = this.references;
    let len = refs.length;

    while (i < len && refs[i].ref.getBoundingClientRect().top <= this.half) i++;

    i = Math.max(0, i - 1);
    this.setState({ currKey: refs[i].title });
  };

  componentDidMount() {
    window.addEventListener("scroll", this._handleScroll, { passive: true });
    window.addEventListener("resize", this._handleResize);
  }

  render() {
    return (
      <ThemeProvider
        theme={{ textColor: "rgb(0,0,0)", mainColor: "rgb(255,255,255)" }}
      >
        <Container>
          <Media query={`(min-width: ${variables.breakpoints.desktop})`}>
            <LeftContainer>
              <Subtitle red>What We Do</Subtitle>
              <UniversityOptions>
                {keys.map((key, index) => (
                  <UniversityOption
                    onClick={this.onClick.bind(null, index)}
                    option={key}
                    index={key}
                    active={this.state.currKey === key}
                  />
                ))}
              </UniversityOptions>
            </LeftContainer>
          </Media>
          <RightContainer>
            {Object.keys(text).map((title, i) => (
              <div ref={ref => ref && this.references.push({ ref, title })}>
                <MainTitle>
                  <SplitText
                    initialPose="exit"
                    pose="enter"
                    charPoses={charPoses}
                  >
                    {title}
                  </SplitText>
                </MainTitle>
                <PaneContainer>
                  <Timeline data={text[title]} />
                </PaneContainer>
              </div>
            ))}
          </RightContainer>
        </Container>
      </ThemeProvider>
    );
  }
}

export default AboutScroll;
