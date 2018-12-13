import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import Media from "react-media";

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
  animation: ${RemoveTransform} 0.5s cubic-bezier(1, 0, 0, 1);
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  pointer-events: auto;
`;

const SideBar = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  top: 48px;
  left: 0;
  position: absolute;
  z-index: -1;
  width: 48px;
  height: calc(100vh - 48px);
  transform: translateX(-100%);
  animation: ${RemoveTransform} 0.5s cubic-bezier(1, 0, 0, 1);
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
  pointer-events: auto;

  @media (max-width: 1240px) {
    flex-direction: row;
    left: 48px;
    top: 0;
    height: 48px;
    z-index: 1;
    width: calc(100vw - 48px);
    transform: translateY(-100%);
  }
`;

const Logo = styled.div`
  z-index: 2;
  position: relative;
  width: 48px;
  height: 48px;
  background-color: #a11b1c;
  background-image: url("/logo.png");
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: center center;
`;

const LinkContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  transition: 0.6s cubic-bezier(1, 0, 0, 1) transform;
  z-index: 1;

  @media (max-width: 1240px) {
    grid-auto-flow: row;
    grid-template-columns: none;
    position: absolute;
    top: 0;
    transform: translateY(${props => (props.active ? "48px" : "-100%")});
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
  @media (max-width: 1240px) {
    width: 100%;
    justify-self: start;
    display: grid;
    grid-auto-flow: row;
  }
`;
const SNavLink = styled(NavLink)`
  color: inherit;
  display: inline-block;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  font-family: "Avenir Next";
  font-weight: 500;
  text-decoration: none;
  padding: 0 16px;
  height: 48px;
  line-height: 48px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 0 0 black;
  transition: 0.2s ease all;

  &:hover {
    box-shadow: inset 0 -2px 0 0 black;
  }
`;

const StyledNavLink = ({ children, ...props }) => (
  <SNavLink
    {...props}
    activeStyle={{
      boxShadow: "inset 0 -2px 0 0 black"
    }}
  >
    {children}
  </SNavLink>
);

const AltStyledNavLink = styled.a`
  color: white;
  background-color: #a11b1c;
  display: inline-block;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  font-family: "Avenir Next";
  font-weight: 500;
  text-decoration: none;
  padding: 0 16px;
  height: 48px;
  line-height: 48px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 0 0 black;
  transition: 0.2s ease all;

  &:hover {
    box-shadow: inset 0 -2px 0 0 white;
  }
`;

const SocialIcon = styled.a`
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0);
  transition: 0.2s ease background-color;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: 16px;
  background-position: center center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 1240px) {
    border-bottom: none;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

const Tint = styled.div`
  position: absolute;
  pointer-events: ${props => (props.active ? "auto" : "none")};
  opacity: ${props => (props.active ? "1" : "0")};
  background-color: rgba(0, 0, 0, 0.9);
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
      <NavigationContainer>
        <Tint
          active={this.state.navIsActive}
          onClick={this.toggleNav.bind(this)}
        />
        <Nav>
          <NavLink to={"/"} style={{ position: "relative" }}>
            <Logo />
          </NavLink>
          <LinkContainer active={this.state.navIsActive}>
            <LeftLinks>
              <StyledNavLink to={"/about"}>About</StyledNavLink>
              <StyledNavLink to={"/contact"}>Contact</StyledNavLink>
              <StyledNavLink to={"/events"}>Events</StyledNavLink>
            </LeftLinks>
            <RightLinks>
              <AltStyledNavLink
                href={
                  "https://secure.squarespace.com/checkout/donate?donatePageId=5ae0cb86aa4a99f96fbb5889"
                }
              >
                Donate
              </AltStyledNavLink>
            </RightLinks>
          </LinkContainer>
        </Nav>
        <SideBar>
          <Media query="(max-width: 1240px)">
            <SocialIcon
              src="/hamburger.png"
              onClick={this.toggleNav.bind(this)}
            />
          </Media>

          <SocialIcon
            src="/ig.png"
            href="https://www.instagram.com/pleasenomorenames/tagged/"
            target="_blank"
          />
          <SocialIcon
            src="/fb.png"
            href="https://www.facebook.com/No-More-Names-2127419657539828/?ref=settings"
            target="_blank"
          />
          <SocialIcon
            src="/youtube.png"
            href="https://www.youtube.com/channel/UClj9gPZZM_CU84rc2u5l1YQ"
            target="_blank"
          />
        </SideBar>
      </NavigationContainer>
    );
  }
}
