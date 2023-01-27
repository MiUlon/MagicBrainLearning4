import React, { Component } from 'react';
import SignIn from './Components/SignIn/SignIn';
import './App.css';
import ParticlesBg from 'particles-bg';

class App extends Component {
  render() {
    return(
      <div>
        <ParticlesBg type="fountain" bg={true} />
        <SignIn />
      </div>
    )
  }
}

export default App;
