import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class TopBar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      title: props.title
    };
  }

  render() {
    return (
      <div>
        <AppBar showMenuIconButton={false} title={this.state.title} />
      </div>
    );
  }
}