import React, { Component } from "react";
import PropTypes from 'prop-types';
import ReactMapboxGL, { StaticMap, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styled, { keyframes } from "styled-components";

import { names } from '../constants'

const MapContainer = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
`

const NameContainer = styled.div`
  font-family: "Avenir Next";
  color: white;
  font-weight: 700;
  text-align: center;
  font-size: 80px;
  margin-top: 20%;
`

const NameCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: black;
`

const NameMarker = ({ lat, lng }) => (
  <Marker
    latitude={lat}
    longitude={lng}
  >
    <NameCircle />
  </Marker>
)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

class MapComponent extends Component {
  static defaultProps = {
    minWait: 100,
    maxWait: 1000
  }

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: 38.686927,
      longitude: -100.787654,
      zoom: 3.6
    },
    name: null,
    markers: [],
    showMap: true
  };

  async addNames(names) {
    var triggeredClose = false

    for (var i in names) {
      const n = names[i]
      await this.setState({
        name: n.name,
        markers: this.state.markers.concat([{
          lat: n.lat,
          lng: n.lng
        }])
      })

      const waitTime = this.props.minWait + (this.props.maxWait - this.props.minWait) * Math.exp(-i / 8)
      await sleep(waitTime)

      if (!triggeredClose && i > names.length * .6) {
        triggeredClose = true
        this.props.nearlyDone()
      }
    }
  }

  loadNames() {
    // hack to load a bunch of names before we have real data
    return names.concat(names).concat(names).concat(names).concat(names).concat(names).concat(names)
  }

  async componentDidMount() {
    const names = await this.loadNames()
    await this.addNames(names)
  }

  render() {
    return (
      <div>
        <MapContainer>
          <StaticMap
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
            mapboxApiAccessToken="pk.eyJ1IjoibGhlbnRzY2hrZXIiLCJhIjoiY2pxMGI0d2RtMGt3ajQyb2R3NHFvaHBvciJ9.7W5gy4Fva8g5p0lDyDk89g"
            mapStyle="mapbox://styles/lhentschker/cjq0bj8rj0i7t2rpie37diyr3"
          >
            {
              this.state.markers.map(m => <NameMarker {...m} />)
            }
          </StaticMap>
        </MapContainer>
        <NameContainer>{this.state.name}</NameContainer>
      </div>
    )
  }
}

MapComponent.propTypes = {
  completeAnimation: PropTypes.function,
  maxWait: PropTypes.number,
  minWait: PropTypes.number,
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const WarningText = styled.div`
  font-family: "Avenir Next";
  color: white;
  font-weight: 700;
  text-align: center;
  font-size: 80px;
  background-color: black;
`
const WarningContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 4s;
`

class WarningComponent extends Component {
  state = {
    showText: false,
  };

  async componentDidMount() {
    await sleep(4000)
    this.setState({
      showText: true,
    })
  }

  render() {
    return (
      <WarningContainer>
        {
          this.state.showText &&
          <WarningText>
            NO MORE NAMES.
          </WarningText>
        }
      </WarningContainer>  
    )
  }
}

export default class IntroAnimation extends Component {
  state = {
    showMap: true,
    showWarning: false,
  };

  render() {
    return (
      <div id="name-map">
        {
          this.state.showMap &&
            <MapComponent
              nearlyDone={() => this.setState({ showWarning: true })}
            />
        }
        {
          this.state.showWarning &&
          <WarningComponent />
        }
      </div>
    )
  }
}
