import React from 'react';
import logo from '../logo.svg';
import '../App.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>PoC Maps</h2>
      </div>
    );
  }
}