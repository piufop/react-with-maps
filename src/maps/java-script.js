import React from 'react';
import BottomBar from '../bottombar/bottombar';
import GoogleMapReact from 'google-map-react';
import config from '../config/config';
import IconButton from 'material-ui/IconButton';
import NavigationRefresh from 'material-ui/svg-icons/navigation/refresh';
import NavigationCancel from 'material-ui/svg-icons/navigation/cancel';

import { getPoints } from './points';

const style = {
  display: 'inline-block',
  width: '100%',
  height: '500px'
};

export default class JavaScriptMap extends React.Component {
  constructor(props) {
    super();
  }

  fetch() {
    getPoints((result) => {
      let points = [];
      result.map((point) => {
        points.push({
          location: new this.maps.LatLng(point.latitude, point.longitude)
        });
      });
      this.heatmap.setData(points);
    });
  }

  clear() {
    this.heatmap.setData([]);
  }

  render() {
    return (
      <div>
        <div>
          <IconButton onClick={this.fetch.bind(this)}><NavigationRefresh /></IconButton>
          <IconButton onClick={this.clear.bind(this)}><NavigationCancel /></IconButton>
        </div>
        <div style={style}>
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
        <div>
          <BottomBar style={{ padding: 10 }} />
        </div>
      </div >
    );
  }
}