import React, { Component } from 'react';
import Wizard from './components/Wizard';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="menu">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Aware dashboard</h1>
          </div>
        </header>
        <Wizard />
      </div>
      
    );
  }
}

export default App;