import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import places from '../data/coordinates.json';

const TOKEN = 'pk.eyJ1Ijoicmxid2ViZGV2IiwiYSI6ImNqczNqbXY0dDByMTAzeXBsbXl2MWRwaHgifQ.LuHRu125g5Zp-Y5PSbIEIw';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0
      },
      events: {}
    };
    this._updateViewport = this._updateViewport.bind(this);
  }

  _updateViewport = (viewport) => {
    this.setState({viewport});
  }

  _renderMarker(place, i) {
    const {imageUrl, coordinates} = place;
    return (
      <Marker key={i} latitude={coordinates[0]} longitude={coordinates[1]} >
        <div className="place">
          <img src={imageUrl} alt="marker"/>
        </div>
      </Marker>
    );
  }

  render() {
    const {viewport} = this.state;

    return (
      <div className='col-sm-12'>
        <section id='about' className='page-content pad-sides'>
          <div className="section-header">
            <h1>About Me</h1>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6" id="my-story">
              <div className="sub-header">My Story</div>
              <p>
                Hey there! My friends call me Rob, so please feel free. It started as a little experiment my first
                day of college - I decided I was going to be Rob from that point on, and funnily enough, it worked!
                On everyone except for my now, <em>amazing</em> wife and my mother...
              </p>
              <p>
                I hate to lose - at anything. My competitive nature was developed at an early age, by my family,
                and fueled by my love for sports as well as video games. I played multiple sports growing up, the 
                top of which were baseball and golf. I still play golf regularly and I am the shortstop for my team in a
                local softball league. I also love playing games such as League of Legends and Counter-Strike in my spare time. 
                My first son will be born in March 2019 and I cannot wait to share my passion for sports and competition with him.
              </p>
              <p>
                All of my passion and competitiveness also spills over into my work. I want to continue pursuing Front-End Development
                because I want my projects to look the best and perform the best. The level of detail and amount of refinement required
                for Front-End is what keeps me driven to continue performing to the highest possible standards.
              </p>
              <img src="https://lh3.googleusercontent.com/xmLqXnpyceSjW_b4RMLDrhhSPU1y-QTr8J0IuqKadJSvtzJfd5SE8cWGqGtH3mULy8SglaSfLjGnt0rceaWUUKSqgzOVYY_s_wmOInkOvp8wXCE7a6ZDBnc9ZrD9pc9eKCjk7eWBT03hE6Io1qTVYcV2MSAkxqlXN0Wgrd7Zbsi2Ifr4ZOGZSzVuqZ3dYb-PoGtXBcB4HkpJhhZ6VqkozWJ4Jt9_dHKlfXMYLrV8-uOBYo-lBBW4zATNc-7K7nT5OHJS8fH9_dY2XIIMyPRbkwgbFZpBowfEb4AQ8f4eJZTrfjhxB8OBrrd0PGHuBX3c7-lNDwB5Pfa25_RRO1LPdu5WrE-SmElOq86axjaqyPxiulkNgdxvvO55OkykhJGhTgwLTUrTwg4HOf9oIKzI0mXKnom-8qEkfYRriMGIQZHu_4KAvTihpn79Nn72lg-FhLY25IHnphaie0AM7dcHrRfhbNwuo_F7whPz6aZJcNVerGRaSWxG7Oxgd5icA3QyyQWSO5H4uGPc9tgVjctm6djCcugeeawQONrMk1Wgblcvqk5gjU00NEfRIr4fC7JGCMnT56VD2hFIYApwdGNFTaDIptZpe1dZUz9AGXjV_QqDUcBYU4idSxq-bTztVwWnHvF8VDxVy6LeczwMIMe5Ok8k=w485-h153-no" 
                alt="Rob's Signature"
                className='signature-small'/>
              
            </div>
            <div className="col-sm-12 col-md-6" id="map">
              <MapGL
                {...viewport}
                dragRotate={false}
                width='100%'
                height='100%'
                min-height='600px'
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={this._updateViewport}
                mapboxApiAccessToken={TOKEN}
              >
                { places.map(this._renderMarker) }
              </MapGL>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;