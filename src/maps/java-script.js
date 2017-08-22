import React from 'react';
import BottomBar from '../bottombar/bottombar';
import GoogleMapReact from 'google-map-react';
import config from '../config/config';
import Chance from 'chance';
import IconButton from 'material-ui/IconButton';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';

const chance = new Chance();

const style = {
  display: 'inline-block',
  width: '100%',
  height: '500px'
};

export default class JavaScriptMap extends React.Component {
  constructor(props) {
    super();
  }

  getPoints() {
    let points = [];
    for (let i = 0; i < 500; i++) {
      points.push({
        location: new this.maps.LatLng(chance.latitude({ min: -20.10, max: -19.70 }), chance.longitude({ min: -44.30, max: -43.70 }))
      })
    }
    this.heatmap.setData(points);
  }

  clearPoints() {
    this.heatmap.setData([]);
  }

  render() {
    return (
      <div>
        <div style={style}>
          <div >
            <IconButton onClick={this.getPoints.bind(this)}><NavigationRefresh /></IconButton>
            <IconButton onClick={this.clearPoints.bind(this)}><NavigationCancel /></IconButton>
          </div>
          <GoogleMapReact bootstrapURLKeys={{
            key: config.GOOGLE_API_KEY,
            libraries: 'visualization'
          }}
            center={this.props.center} zoom={this.props.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => {
              this.map = map;
              this.maps = maps;
              this.heatmap = new this.maps.visualization.HeatmapLayer();
              this.heatmap.setMap(map);
            }}>
          </GoogleMapReact>
        </div>
        <BottomBar />
      </div >
    );
  }
}