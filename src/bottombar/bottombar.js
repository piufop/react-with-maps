import React from 'react';
import Paper from 'material-ui/Paper';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

export default class BottomBar extends React.Component {
  render() {
    return (
      <div>
        <Paper zDepth={1}>
          <BottomNavigation>
            <BottomNavigationItem label='Powered by Coconuts' icon={<IconLocationOn />} />
          </BottomNavigation>
        </Paper>
      </div>
    );
  }
}