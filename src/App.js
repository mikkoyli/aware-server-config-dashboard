import React, { Component } from 'react';

import logo from './logo.svg';

import ConfigForm from './components/ConfigForm';
import Header from './components/Header';

import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  render() {
    return (
      <div className="catch-of-the-day">
      <div className="menu">
          <Header />
        </div>
      <ConfigForm/>
      </div>
    );
  }
}

export default App;