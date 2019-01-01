import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import SplitText from "react-pose-text";

const cubicEasing = "cubic-bezier(1, 0, 0, 1)";
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
  font-weight: 500;
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
  font-weight: 400;
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

  @media (max-width: 1240px) {
    display: block;
  }
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
  constructor(props) {
    super(props);
    this.state = {
      members: {
        "Harvard University": {
          name: "Meshall Bannerman",
          img: "/meshaal.jpg",
          major: "Government",
          desc: `Meshaal Bannerman is a sophomore at harvard where he concentrates in Government with a secondary in Economics. Meshaal serves as the Political Action Chair for Harvard's Black Men's Forum. Meshaal is very much committed to reforming community policing and bias in the criminal justice system. On campus, Meshaal has helped plan a protest in response to a Harvard student being a victim of brutal policing. He tutors at local prisons during the school year, volunteers as a basketball coach at a local elementary school, and is involved at Harvard's Institute of Politics. He is currently interning for US Senator Robert Menendez (NJ-D).`
        },
        "Dartmouth University": {
          name: "Demi Stratmon",
          img: "/demi.jpg",
          major: "Government and Middle Eastern Studies",
          desc: `Demi Stratmon, the founder of Dartmouth's Black Student Union, is a Junior at Dartmouth, where she studies Government and Middle Eastern Studies. Demi showed interest in building Dartmouth's Black community early on, serving as the Vice President of the Afro-American Society and Executive Board Member of "Black Girls Are Magic" her sophomore year. By focusing on resource accessibility, financial literacy, social awareness, and mental illness health Demi played a major role in creating an even more-inclusive environment for students of African descent in the Woods. Outside of her active participation in Black, student-led organizations, Demi is a proud Dartmouth Cheerleader, blogger, and natural-hair fanatic!`
        },

        "Brown University": {
          name: "Khalif Andre",
          img: "/khalif.jpg",
          major: "Africana Studies and Public Policy",
          desc: `Khalif Andre is a senior at Brown where he double concentrates in Africana Studies and Public Policy. He is the president of Beta Omega Chi, Black Brown-based anti-hazing and community service oriented fraternity. As a former Minority Peer Counselor at Brown, Khalif worked as a residential and educational adviser and helped to create and present social-identity and anti-oppression education workshops. He is self-proclaimed prison abolitionist and has been an active member in the executive leadership boards of both Brown's Black Student Union and the Brotherhood, and organization which serves to increase the visibility and critical community engagement of Black men on Brown's campus.`
        },
        "Princeton University": {
          name: "Fey Popoola",
          img: "/fey.jpg",
          major: "Linguistics",
          desc: `Fey Popoola is a junior at Princeton University concentrating in Linguistics with certificates in Computer Science and Cognitive Science. Originally from the UK where police are not regularly armed, she was shocked to learn about police brutality in US and is excited to help fight it in any way she can. Fey is active in the arts on campus, particularly writing and performing theatre and poetry, as well as being at the center of the live music scene at Terrace F. Club. She is very excited for the opportunity to be part of the No More Names team, and instigate change by any means necessary.`
        },
        "University of Pennsylvania": {
          name: "Christine Olagun-Samuel",
          img: "/christine.jpg",
          major: "Health and Societies",
          desc: `Christine Olagun-Samuel is a junior at the University of Pennsylvania where she is pursuing a BA in Health and Societies with a Concentration in Health Policy and Law, and a minor in Chemistry. At Penn, Christine is a Ben Franklin Scholar. She is also currently the VIce president of the Black Student League, working to bring together students of the African diaspora on campus. She also enjoys mentoring local high school students through several programs, including the Pipeline Program at Penn's Netter Center for Community Partnerships and the Daa How Scholars Mentoring Program. Christine has also been a reporter for the Daily Pennsylvanian, Penn's independent student-run newspaper since her freshman year and currently writes her opinion column "Ebony and Ivy". In there free time, she enjoys writing short stories, reading novels, sketching and watching films.`
        },
        "Cornell University": {
          name: "Jael Ferguson",
          img: "/jael.jpg",
          major: "Urban and Regional Studies",
          desc: `Jael Ferguson is a junior at Cornell University where she majors in Urban and Regional Studies and is pursuing minors in Environmental Sustainability Sciences and International Development Studies. She is passionate about issues of water sanitation and equality in cities locally and globally. She is an active member in the Student Assembly City and Local Affairs Committee, that helps bridge the gap between the Cornell and Ithaca community through events such as Home Plate and Town Hall. She is also involved in The Curly Initiative, a club that aims to unite all people of color and educate people about black hair practices and beyond the Cornell campus.`
        },
        "Columbia University": {
          name: "Jade Thompson",
          img: "/jade.jpg",
          major: "Economics and Sustainable Development",
          desc: `Jade Thompson is a rising sophomore at Columbia University with plans to double major in Economics and Sustainable Development. As a founder of both Mount Vernon Community Cleanup Crew and Jade's Lemonade Stand, Jade uses her interests in environmental science and business to serve the black community and encourage minority to start small businesses. Jade played a role in the Columbia Black History Month showcase and is a member of Columbia NAACP. Black Students Organization and Black Organization of Soul Sisters. One of Jade's greatest aspirations is to organize a nonprofit to build affordable eco-friendly tiny homes ot help address issues that plague that black community, such has homelessness, pollution and poverty.`
        },
        "Yale University": {
          name: "Miye Oni",
          img: "/miye.jpg",
          major: "Political Economics",
          desc: `Miye Oni, a representative of the No More Name initiative, is a rising junior and political economy major at Yale University. Miye is deeply tied within Yale's black community, serving as a board member for the Students of Diaspora, and a prominent member of the Black Men's UNion. He was heavily involved in bringing the #Unfiltered campaign to Yale's campus. Mite is currently a member of the Yale Men's Basketball team and uses his platform to mentor youth in both the New Haven and Los Angeles areas.`
        }
      }
    };

    this.state.currentUniversity = Object.keys(this.state.members)
      .sort()
      .shift();
  }

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
        <Nav />
        <Container>
          <TitleContainer>
            <TitleGroup>
              <Subtitle>What We're</Subtitle>
              <MainTitle>About</MainTitle>
            </TitleGroup>
          </TitleContainer>
          <MainContainer>
            <HorizontalContainer>
              <TitleGroup>
                <Subtitle red>Our founder</Subtitle>
                <BoldText>Chris Egi</BoldText>
              </TitleGroup>
              <TitleGroup>
                <Subtitle red>Education</Subtitle>
                <TallText>Harvard</TallText>
              </TitleGroup>
              <TitleGroup>
                <Subtitle red>Major</Subtitle>
                <TallText>African American Studies &amp; Economics</TallText>
              </TitleGroup>
            </HorizontalContainer>
            <PaneContainer space>
              <ProfileImage src="/chris.jpg" />
              <Text>
                Chris Egi, the founder of the No More Names initiative and a
                Toronto Native like the Weekend, is a recent Harvard Graduate,
                where he graduated with High Honors in Economics, with a minor
                in African American studies. Chris has proven himself to care
                deeply about issues in the black community by taking an
                action-driven approach to these problems. He has played a key
                role in several social media awareness campaigns on Harvard's
                campus: Harvard #ThankYouBlackWomen, Harvard #BlackIs, and
                #Unfiltered: At Set at the Table. He also spoke about the need
                for action against police brutality in his address at Harvard's
                commencement, where he was chosen from a group of over 100
                applications to give a speech in front of 32,000 people. Chris
                was also a Harvard endorsee for the Rhodes Scholarship and is
                the Former Captain of the Harvard Men's Basketball Team.
              </Text>
            </PaneContainer>
          </MainContainer>
          <InfoContainer>
            <Info>
              <TitleGroup>
                <Subtitle red>This is</Subtitle>
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
            <Info>
              <LogoContainer>
                <Logo src="/harvard.png" />
                <Logo src="/columbia.png" />
                <Logo src="/dartmouth.png" />
                <Logo src="/cornell.png" />
                <Logo src="/princeton.png" />
                <Logo src="/upenn.png" />
                <Logo src="/yale.png" />
                <Logo src="/brown.png" />
              </LogoContainer>
              <TitleGroup space>
                <Subtitle red>Top talent.</Subtitle>
              </TitleGroup>
              <Text>
                We have a diverse representative group, most notably, partners
                from all eight Ivy Leagues, all working to advance our mission.
              </Text>
            </Info>
          </InfoContainer>
        </Container>
        <Container>
          <LeftContainer>
            <Subtitle red>Universities</Subtitle>
            <UniversityOptions>
              {Object.keys(this.state.members)
                .sort()
                .map(university => (
                  <UniversityOption
                    onClick={this.onClick}
                    university={university}
                    active={university === this.state.currentUniversity}
                  />
                ))}
            </UniversityOptions>
          </LeftContainer>
          <RightContainer>
            <Subtitle red>Representative</Subtitle>
            <TallName>
              <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                {this.state.members[this.state.currentUniversity].name}
              </SplitText>
            </TallName>

            <PaneContainer>
              <LeftAlign>
                <ProfileImage
                  src={this.state.members[this.state.currentUniversity].img}
                />
                <VerticalContainer>
                  <TitleGroup>
                    <Subtitle red>Education</Subtitle>
                    <TallText>{this.state.currentUniversity}</TallText>
                  </TitleGroup>
                  <TitleGroup>
                    <Subtitle red>Major</Subtitle>
                    <TallText>
                      {this.state.members[this.state.currentUniversity].major}
                    </TallText>
                  </TitleGroup>
                </VerticalContainer>
              </LeftAlign>
              <Text>
                {this.state.members[this.state.currentUniversity].desc}
              </Text>
            </PaneContainer>
          </RightContainer>
        </Container>
        <Footer />
      </div>
    );
  }
}
