import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Section = styled.section`
  width: 1024px;
  margin: 64px auto;
  display: flex;
  position: relative;
`;

const Period = styled.span`
  font: inherit;
  color: #a11b1c;
  &::after {
    content: ".";
  }
`;

const Text = styled.p`
  font-family: "Avenir";
  font-size: 20px;
  line-height: 1.5;
`;

const Title = styled.h1`
  position: sticky;
  top: 0;
  margin: 0;
  margin-right: 64px;
  color: black;
  text-transform: uppercase;
  font-size: 112px;
  font-famiy: "Avenir Next";
  font-weight: 900;
  line-height: 0.8;
  text-shadow: 7px 7px 0 rgba(0, 0, 0, 0.05);
`;

export default class extends Component {
  render() {
    return (
      <Section>
        <Title>
          Our <Period />
          <br /> story
          <Period />
        </Title>
        <Text>
          Merely a week before the Class of 2018 first set foot on Harvard’s
          campus, Michael Brown was shot and killed by police in his hometown of
          Ferguson, Missouri. Four years later, we are still learning names.
          Philando Castille. Stephon Clark. Danny Thomas. Even the names of our
          own classmates. We have entered, passed through, and are soon to leave
          college—and still we see no end in sight to the brutalization of our
          people by the police without due justice. We want to do something
          about it. Organized by Harvard Students, No More Names is a fundraiser
          and awareness-building campaign which demonstrates our will to make
          large contributions to this cause. We are putting our foot down and
          saying that enough is enough. The cycle cannot continue. We cannot
          wait any longer. There will be no more names.
        </Text>
      </Section>
    );
  }
}
