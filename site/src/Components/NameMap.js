import React, { Component } from 'react'
import ReactMapboxGL, { Marker, LinearInterpolator } from 'react-map-gl';
import styled, { keyframes } from "styled-components";
import { pointer } from 'popmotion';

import CityStory from './CityStory';

import { cities } from '../constants'

const MapContainer = styled.div`
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
`

const TitleContainer = styled.div`
  font-family: "Avenir Next";
  color: white;
  font-weight: 700;
  text-align: center;
  font-size: 60px;
  z-index: -1;
  width: 800px;
  margin-left: -400px;
`

const cityCircleKeyframe = keyframes`
  0% {
    box-shadow: 0 0 0 0 #888888;
  }
  50% {
    box-shadow: 0 0 0 5px #888888;
  }
  100% {
    box-shadow: 0 0 0 0 #888888;
  }
`

const CityCircle = styled.div`
  border-radius: 30px;
  background: #B8B8B8;
  animation: ${cityCircleKeyframe} 2s infinite;
`

const MarkerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40px;
`

const CityName = styled.div`
  margin-top: 5px;
  color: #B8B8B8;
`

class City extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showName: false,
      circleSize: 20 - 15 * Math.exp(-props.size / 4)
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.active && this.props.active) {
      console.log(this.props, 'BECAME ACTIVE')
    }
  }

  render() {
    return (
      <Marker
        latitude={this.props.lat}
        longitude={this.props.lng}
        captureClick
      >
        <MarkerWrapper>
          <CityCircle
            onClick={() => this.props.focusCity(this.props)}
            onMouseEnter={() => this.setState({ showName: true })}
            onMouseLeave={() => this.setState({ showName: false })}
            style={{
              zIndex: 3,
              width: this.state.circleSize,
              height: this.state.circleSize,
            }}
          />
          {
            (this.state.showName && !this.props.active) &&
            <CityName>{this.props.name}</CityName>
          }
        </MarkerWrapper>
      </Marker>
    )
  }
}

const START_LAT = 38.686927;
const START_LNG = -97.787654;
const START_ZOOM = 3.6
const FOCUS_ZOOM = 7.5

export default class NameMap extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: START_LAT,
      longitude: START_LNG,
      zoom: START_ZOOM
    },
    cities: [],
    focused: false,
  };

  constructor(props) {
    super(props);
    this.focusCity = this.focusCity.bind(this);
    this.unfocusCity = this.unfocusCity.bind(this);
  }

  async componentDidMount() {
    await this.setState({ cities: cities });
    this.focusCity(cities[0])
  }

  async focusCity(city) {
    this.setState({
      focused: true,
      activeCity: city,
      viewport: {
        ...this.state.viewport,
        latitude: city.lat,
        longitude: city.lng,
        zoom: FOCUS_ZOOM,
      }
    });
  }

  async unfocusCity() {
    const viewport = this.state.viewport
    this.setState({
      focused: false,
      activeCity: null,
      viewport: {
        ...this.state.viewport,
        zoom: START_ZOOM,
        latitude: START_LAT,
        longitude: START_LNG,
      }
    })
  }

  render() {
    return (
      <div>
        <MapContainer>
          <ReactMapboxGL
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
            mapboxApiAccessToken="pk.eyJ1IjoibGhlbnRzY2hrZXIiLCJhIjoiY2pxMGI0d2RtMGt3ajQyb2R3NHFvaHBvciJ9.7W5gy4Fva8g5p0lDyDk89g"
            mapStyle="mapbox://styles/lhentschker/cjqzymdq41jtf2spahpc12naz"
            transitionInterpolator={new LinearInterpolator()}
            transitionDuration={1000}
            scrollZoom={false}
          >
            {
              !this.state.focused &&
              <Marker
                latitude={this.state.viewport.latitude + 2}
                longitude={this.state.viewport.longitude}
              >
                <TitleContainer>LEARN THE STORIES</TitleContainer>
              </Marker>
            }
            {
              this.state.cities.map((c, i) =>
                <City
                  key={i}
                  focusCity={this.focusCity}
                  {...c}
                />
              )
            }
          </ReactMapboxGL>
        </MapContainer>
        {
          this.state.focused &&
          <CityStory
            unfocusCity={this.unfocusCity}
            {...this.state.activeCity}
          />
        }
      </div>
    )
  }
}
