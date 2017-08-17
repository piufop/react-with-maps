import React, { Component } from 'react';
import config from './config/config';
import * as firebase from 'firebase';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Header from './header/header';
import Home from './home/home';
import JavaScriptMap from './maps/java-script';
import FusionTableMap from './maps/fusion-table'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/maps/javascript' render={() => <JavaScriptMap center={ {lat: -19.9245, lng:-43.9352 } } zoom={config.GOOGLE_MAPS_INITIAL_ZOOM} /> } />
          <Route exact path='/maps/fusiontable' component={FusionTableMap} />
        </div>
      </BrowserRouter>
    );
  }
}

const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  databaseURL: config.FIREBASE_DATABASE_URL,
  projectId: config.FIREBASE_PROJECT_ID,
  storageBucket: config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);

export default App;
