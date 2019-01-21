import React, { Component } from 'react';
import styled from "styled-components";
import InstagramEmbed from 'react-instagram-embed';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import FontAwesome from 'react-fontawesome'


const PageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CityContainer = styled.div`
  width: 80vw;
  height: 90vh;
  background: white;
  border-radius: 10px;
  display: flex;
  flex: 1;
  margin-right: 10vw;
`

const PostsContainer = styled.div`
  max-height: 100%;
  overflow: scroll;
  max-width: 350px;
  min-width: 350px;
`

const CityName = styled.div`
  color: black;
  font-family: "Avenir Next";
  font-weight: 700;
  font-size: 55px;
  margin-left: 20px;
`

const StoryContainer = styled.div`
  flex: 1;
  overflow: scroll;
`

const BackContainer = styled.div`
  margin-left: 10px;
  color: white;
  font-size: 30px !important;
  cursor: pointer;
  height: 100%;
`

const BackArrow = styled.div`
  margin-top: 5vh;
  margin-left: 5vw;
  margin-right: 5vw;
`

const Category = styled.div`
  color: gray;
`

const Value = styled.div`
  font-weight: 500;
`

const Name = props => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "white",
    borderBottom: "1px solid #dadada",
    borderTop: "1px solid #dadada"
  }}>
    <div
      style={{
        width: "100%"
      }}
    >
      <div
        style={{
          margin: 15
        }}
      >
        <div
          style={{
            marginBottom: 10,
            marginTop: 10,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
          }}
          onClick={props.setName}
        >
          <div style={{
            fontWeight: 700,
            fontSize: 30,
            textAlign: "left",
            flex: 1
          }}>
            {props.name}
          </div>
          <FontAwesome
            style={{
              marginRight: 15
            }}
            name="chevron-down"
          />
        </div>
        {
          props.active &&
          <div>
            <div
              style={{
                display: "flex",
              }}
            >
              <img
                src={props.img}
                style={{
                  flex: 1
                }}
              />
              <div
                style={{
                  marginLeft: 20,
                  flex: 1
                }}
              >
                <div>
                  <Category>Age</Category>
                  <Value>{props.age}</Value>
                </div>
                <div>
                  <Category>Race</Category>
                  <Value>{props.race}</Value>
                </div>
                <div>
                  <Category>Unarmed</Category>
                  <Value>{props.unarmed}</Value>
                </div>
              </div>
            </div>
            <div
              style={{marginTop: 20}}
            >
              {props.description}
            </div>
          </div>
        }
      </div>
      </div>
  </div>
)

export default class CityStory extends Component {
  state = {
    names: [
      {
        name: "TRAYVON MARTIN",
        description: "Trayvon Benjamin Martin was a 17-year-old African American teenager from Miami Gardens, Florida, who was fatally shot in Sanford, Florida by George Zimmerman. Martin had gone with his father on a visit to his father's fiancée at her townhouse at The Retreat at Twin Lakes in Sanford.",
        img: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE1ODA0OTcyMDYwNjczNTQ5/trayvon-martin.jpg",
        age: 21,
        race: "Black",
        unarmed: "Yes",
      },
      {
        name: "MICHAEL BROWN",
        description: "On August 9, 2014, Michael Brown Jr., an 18-year-old African American man, was fatally shot by a white police officer, 28-year-old Darren Wilson, in the city of Ferguson, Missouri, a suburb of St. Louis.",
        img: "https://bloximages.chicago2.vip.townnews.com/stlamerican.com/content/tncms/assets/v3/editorial/5/28/528349fe-9b61-11e8-a04f-979ae0d5ecd6/5b6b7a881abd6.image.jpg?resize=400%2C326",
        age: 21,
        race: "Black",
        unarmed: "Yes",
      },
    ],
    activeName: 0
  };

  render() {
    return (
      <PageContainer>
        <BackContainer>
          <BackArrow>
            <FontAwesome
              onClick={this.props.unfocusCity}
              name="arrow-left"
            />
          </BackArrow>
        </BackContainer>
        <CityContainer>
          <PostsContainer>
            <InstagramEmbed
              url='https://www.instagram.com/p/Bsy_8UmF1U0/'
              hideCaption={false}
              containerTagName='div'
            />
            <TwitterTweetEmbed
              tweetId={'1085167708235272193'}
            />
          </PostsContainer>
          <StoryContainer>
            <CityName>
              #{this.props.name.toUpperCase()}
            </CityName>
            <div>
              {
                this.state.names.map((n, i) =>
                  <Name
                    active={i == this.state.activeName}
                    setName={() => this.setState({
                      activeName: i
                    })}
                    {...n}
                  />
                )
              }
            </div>
          </StoryContainer>
        </CityContainer>
      </PageContainer>
    )
  }
}
