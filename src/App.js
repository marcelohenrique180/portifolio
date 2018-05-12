import React, { Component } from 'react';
import User from './components/User/User'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <User />
      </div>
    );
  }
}

export default App;
