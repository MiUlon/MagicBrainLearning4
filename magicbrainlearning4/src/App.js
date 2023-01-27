import React, { Component } from 'react';
import SignIn from './Components/SignIn/SignIn';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import DetectImage from './Components/DetectImage/DetectImage';
import './App.css';
import ParticlesBg from 'particles-bg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      linkURL: ''
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  };

  onButtonSubmit = (event) => {
    this.setState({linkURL: this.state.input});
  };

  render() {
    return(
      <div>
        <ParticlesBg type="fountain" bg={true} />
        <SignIn />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <DetectImage linkURL={this.state.linkURL}/>
      </div>
    )
  }
}

export default App;
