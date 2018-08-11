import React, { Component } from 'react';
import Wizard from './components/Wizard';

import './App.css';

class App extends Component {
  state = {
    response: ''
  };

  render() {
    return (
      <div className="menu">
            <Wizard />
        </div>
    );
  }
}

export default App;