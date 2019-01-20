import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { between } from "polished";
import Title from "./Title";
import P from "./P";
import Timeline from "./Timeline";

import text from "../about";
import variables from "../variables";

const Container = styled.div`
  width: 1024px;
  margin: 64px auto;

  @media (max-width: ${variables.breakpoints.mobile}) {
    display: block;
    width: 100%;
    padding: 0px 16px;
  }
`;

const Wrapper = styled.div`
  & + & {
    margin-top: 64px;
  }
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;

  @media (max-width: 1240px) {
    display: block;
    width: auto;

  }
`;

const Period = styled.span`
  font: inherit;
  color: #a11b1c;
  &::after {
    content: ".";
  }
`;

export default class extends Component {
  render() {
    return (
      <ThemeProvider
        theme={{
          textColor: "rgb(0,0,0)",
          mainColor: "rgb(255,255,255)"
        }}
      >
        <Container>
          <Wrapper>
            <Section>
              <Title>
                Our
                <Period />
                <br />
                Story
                <Period />
              </Title>
              <div>
                <P>
                  Merely a week before the Class of 2018 first set foot on
                  Harvard’s campus, Michael Brown was shot and killed by police
                  in his hometown of Ferguson, Missouri. Four years later, we
                  are still learning names. Philando Castille. Stephon Clark.
                  Danny Thomas. Even the names of our own classmates. We have
                  entered, passed through, and are soon to leave college—and
                  still we see no end in sight to the brutalization of our
                  people by the police without due justice. We want to do
                  something about it. Organized by Harvard Students, No More
                  Names is a fundraiser and awareness-building campaign which
                  demonstrates our will to make large contributions to this
                  cause.
                </P>
              </div>
            </Section>{" "}
          </Wrapper>
          <Wrapper>
            <Section>
              <Title>
                Our
                <Period />
                <br />
                Mission
                <Period />
              </Title>
              <P>
                {" "}
                We are putting our foot down and saying that enough is enough.
                The cycle cannot continue. We cannot wait any longer. There will
                be no more names.
              </P>
            </Section>
          </Wrapper>
          <Wrapper>
            <Timeline
              data={[
                {
                  year: 1,
                  title: "Engage",
                  text:
                    "By building our national infrastructure through our campus strategy, we can connect college campuses to a national network in addition to incredible orgs."
                },
                {
                  year: 2,
                  title: "Invest",
                  text:
                    "Expand event series to schools across the nation. Build and maintain influencer relationships. Build No More Names as infrastructure as a registered 501 (c3)"
                },
                {
                  year: 3,
                  title: "Excite",
                  text:
                    "National density across 100 college campuses and high schools. 50 successful grants distributed. Leveraging"
                }
              ]}
            />
          </Wrapper>
        </Container>
      </ThemeProvider>
    );
  }
}
