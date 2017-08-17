import React from 'react';
import TopBar from '../topbar/topbar';
import BottomBar from '../bottombar/bottombar';
import GoogleMapReact from 'google-map-react';
import config from '../config/config';
import Chance from 'chance';

const chance = new Chance();

const style = {
  display: 'inline-block',
  width: '100%',
  height: '500px'
};

let points = [];
for (let i = 0; i < 200; i++) {
  points.push({
    latitude: chance.latitude({ min: -19.99, max: -19.77 }),
    longitude: chance.longitude({ min: -44.10, max: -43.85 }),
    weight: chance.integer({ min: 1, max: 50 })
  })
}

export default class JavaScriptMap extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <TopBar title={'JavaScript'} />
        <div style={style}>
          <GoogleMapReact bootstrapURLKeys={{
            key: config.GOOGLE_API_KEY,
            libraries: 'visualization'
          }}
            center={this.props.center} zoom={this.props.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => {

              const heatmap = new maps.visualization.HeatmapLayer({
                data: points.map(point => (
                  {
                    location: new maps.LatLng(point.latitude, point.longitude),
                    weight: point.weight
                  }))
              });
              heatmap.setMap(map);
            }}>

          </GoogleMapReact>
        </div>
        <BottomBar />
      </div >
    );
  }
}