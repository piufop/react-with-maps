import React from 'react';
// import * as firebase from 'firebase';
import TopBar from '../topbar/topbar';
import BottomBar from '../bottombar/bottombar';

export default class FusionTabletMap extends React.Component {
  render() {
    return (
      <div>
        <TopBar title={'Fusion Table'} />
        <BottomBar />
      </div>
    );
  }
}