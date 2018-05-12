import React, { Component } from 'react';
import Particles from 'react-particles-js';
import User from './components/User/User'
import Items from './components/Item/Items'
import particlesConfig from './particlesjs-config.json'
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="app">
        <User />
        <Items />
        <Particles params={particlesConfig} style={{
          position: 'absolute',
          width: '100%',
          top: 0, left: 0, zIndex: -1
        }} />
      </div>
    );
  }
}

export default App;
