import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const style = {
  margin: 20,
  width: 200,
  height: 200
};

export default class Home extends React.Component {
  handleJavaScript() {
    window.location = '/maps/javascript';
  };

  handleFusionTable() {
    window.location = '/maps/fusiontable';
  }

  render() {
    return (
      <div>
        <RaisedButton label='JavaScript' primary={true} style={style} onClick={() => this.handleJavaScript()} />
        <RaisedButton label='Fusion Table' primary={true} style={style} onClick={() => this.handleFusionTable()} />
      </div>
    );
  }
}