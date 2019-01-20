import React, { Component } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import SocialIcon from "./SocialIcon";
import variables from "../variables";

const RemoveTransform = keyframes`
  to {
    transform: none; 
  }
`;

const Footer = styled.div`
  display: grid;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  background-color: white;
  transform: translateY(100%);
  animation: ${RemoveTransform} 0.5s cubic-bezier(1, 0, 0, 1);
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  pointer-events: auto;
  padding: ${variables.navHeight};
  @media (max-width: ${variables.breakpoints.desktop}) {
    padding: calc(${variables.navHeight} * .5);
  }
`;

const FooterInner = styled.div`
  width: ${variables.breakpoints.desktop};
  margin: 0 auto;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;

  @media (max-width: ${variables.breakpoints.desktop}) {
    width: 100%;
  }
`;

const Logo = styled.img`
  width: ${variables.navHeight};
  height: ${variables.navHeight};
  object-fit: contain;
  align-self: center;
  @media (max-width: ${variables.breakpoints.desktop}) {
    width: calc(${variables.navHeight} * .5);
    height: calc(${variables.navHeight} * .5);
  }
`;

const LinkGroup = styled.nav`
  display: grid;
`;

const Icons = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

export default () => (
  <ThemeProvider
    theme={{
      textColor: "rgb(0,0,0)",
      mainColor: "rgb(255,255,255)"
    }}
  >
    <Footer>
      <FooterInner>
        <Logo src="/logo-alt.png" />
        <Icons>
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
        </Icons>
      </FooterInner>
    </Footer>
  </ThemeProvider>
);
