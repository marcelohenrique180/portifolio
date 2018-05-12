import React, { Component } from 'react';
import User from './components/User/User'
import Items from './components/Item/Items'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <User />
        <Items />
      </div>
    );
  }
}

export default App;
