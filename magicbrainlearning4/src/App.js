import React, { Component } from 'react';
import SignIn from './Components/SignIn/SignIn';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import './App.css';
import ParticlesBg from 'particles-bg';

class App extends Component {
  render() {
    return(
      <div>
        <ParticlesBg type="fountain" bg={true} />
        <SignIn />
        <Logo />
        <Rank />
        <ImageLinkForm />
      </div>
    )
  }
}

export default App;
