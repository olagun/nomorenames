import React, { Component } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { NavLink, Link } from "react-router-dom";
import Media from "react-media";
import SocialIcon from "./SocialIcon";
import variables from "../variables";
import { darken } from "polished";

// zIndex 1 content
// zIndex 2 Nav
// zIndex 3 Preloader
const NavigationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  pointer-events: none;
`;

const RemoveTransform = keyframes`
  to {
    transform: none;
  }
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr;
  // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  transform: translateY(-100%);
  z-index: 3;
  animation: ${RemoveTransform} 0.5s cubic-bezier(1, 0, 0, 1);
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  pointer-events: auto;
`;

const SideBar = styled.div`
  background-color: black;
  display: grid;
  grid-auto-flow: column;
  position: absolute;
  z-index: -1;

  width: ${variables.navHeight};
  height: ${variables.navHeight};
  top: 0;
  left: ${variables.navHeight};
  transform: translateX(-100%);
  animation: ${RemoveTransform} 0.5s cubic-bezier(1, 0, 0, 1);
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
  pointer-events: auto;

  flex-direction: row;

  z-index: 1;
  transform: translateY(-100%);
`;

const Logo = styled.div`
  z-index: 3;
  position: relative;
  width: ${variables.navHeight};
  height: ${variables.navHeight};
  background-color: ${props => props.theme.mainColor};
  background-image: url("/logo-alt.png");
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: center center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  transition: 0.6s cubic-bezier(1, 0, 0, 1) transform;
  z-index: 1;

  @media (max-width: ${variables.breakpoints.mobile}) {
    grid-auto-flow: row;
    grid-template-columns: none;
    position: absolute;
    top: 0;
    transform: translateY(
      ${props => (props.active ? variables.navHeight : "-100%")}
    );
    left: 0;
    background-color: black;
    color: white;
    width: 100%;
  }
`;

const LeftLinks = styled.div`
  justify-self: start;
  // display: grid;
  @media (max-width: 1240px) {
    width: 100%;
    display: grid;
    grid-auto-flow: row;
  }
`;

const RightLinks = styled.div`
  justify-self: end;
  display: grid;
  grid-auto-flow: column;

  @media (max-width: ${variables.breakpoints.mobile}) {
    grid-auto-flow: row;
    background-color: white;
    width: 100%;
  }
`;

const RightLinksInner = styled.div`
  display: flex;
  @media (max-width: ${variables.breakpoints.mobile}) {
    width: 100%;
    display: grid;
    grid-auto-flow: ${props => (props.row ? "row" : "column")};
  }
`;

const SNavLink = styled(NavLink)`
  color: inherit;
  display: inline-block;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
  font-family: "Avenir Next";
  font-weight: 500;
  text-decoration: none;
  padding: 0 16px;
  height: ${variables.navHeight};
  line-height: ${variables.navHeight};
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.mainColor};
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 0 0 black;
  transition: 0.1s ease all;

  &:hover {
    background-color: ${props => darken(0.1, props.theme.mainColor)};
  }
`;

const StyledNavLink = ({ children, ...props }) => (
  <SNavLink {...props} activeStyle={{ boxShadow: "inset 0 -2px 0 0 black" }}>
    {children}
  </SNavLink>
);

const Tint = styled.div`
  position: absolute;
  pointer-events: ${props => (props.active ? "auto" : "none")};
  opacity: ${props => (props.active ? "1" : "0")};
  background-color: rgba(0, 0, 0, 0.9);
  z-index: -2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.2s ease opacity;
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navIsActive: false
    };
  }

  toggleNav() {
    this.setState({
      navIsActive: !this.state.navIsActive
    });
  }

  render() {
    return (
      <ThemeProvider
        theme={{
          textColor: "black",
          mainColor: "white"
        }}
      >
        <NavigationContainer>
          <Tint
            active={this.state.navIsActive}
            onClick={this.toggleNav.bind(this)}
          />
          <Nav>
            <NavLink to={"/"}>
              <Logo />
            </NavLink>
            <LinkContainer active={this.state.navIsActive}>
              <LeftLinks>
                <StyledNavLink to={"/about"}>About</StyledNavLink>
                <StyledNavLink to={"/events"}>Events</StyledNavLink>
                <StyledNavLink to={"/contact"}>Contact</StyledNavLink>
              </LeftLinks>
              <RightLinks>
                <RightLinksInner>
                  <SocialIcon
                    src="/twitter.svg"
                    href="https://twitter.com/_nomorenames"
                    target="_blank"
                  />
                  <SocialIcon
                    src="/instagram.svg"
                    href="https://www.instagram.com/_nomorenames/tagged/"
                    target="_blank"
                  />
                  <SocialIcon
                    src="/facebook.svg"
                    href="https://www.facebook.com/No-More-Names-2127419657539828/"
                    target="_blank"
                  />
                  <SocialIcon
                    src="/youtube.svg"
                    href="https://www.youtube.com/channel/UClj9gPZZM_CU84rc2u5l1YQ"
                    target="_blank"
                  />
                </RightLinksInner>
                <ThemeProvider
                  theme={{
                    textColor: "#fff",
                    mainColor: "#a11b1c"
                  }}
                >
                  <RightLinksInner row>
                    <StyledNavLink to={"/merch"}>Merchandise</StyledNavLink>
                    <StyledNavLink to={"/donate"}>Donate</StyledNavLink>
                  </RightLinksInner>
                </ThemeProvider>
              </RightLinks>
            </LinkContainer>
          </Nav>
          <Media query="(max-width: 1240px)">
            <SideBar>
              <SocialIcon
                src="/hamburger.png"
                onClick={this.toggleNav.bind(this)}
              />
            </SideBar>
          </Media>
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}
