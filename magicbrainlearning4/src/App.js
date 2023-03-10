import React, { Component } from 'react';
import SignIn from './Components/SignIn/SignIn';
import SignInForm from './Components/SignInForm/SignInForm';
import Register from './Components/Register/Register';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import DetectImage from './Components/DetectImage/DetectImage';
import './App.css';
import ParticlesBg from 'particles-bg';
import Clarifai from 'clarifai';

window.process = {};

const app = new Clarifai.App({
  apiKey: '82819b6c8d2d4417abbdebb80e6a3cdc'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      linkURL: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const imageWidth = Number(image.width);
    const imageHeight = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * imageWidth,
      topRow: clarifaiFace.top_row * imageHeight,
      rightCol: imageWidth - (clarifaiFace.right_col * imageWidth),
      bottomRow: imageHeight - (clarifaiFace.bottom_row * imageHeight)
    }
  }

  setFaceBox = (box) => {
    this.setState({box: box});
  };

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  };

  onButtonSubmit = (event) => {
    this.setState({linkURL: this.state.input});
    app.models.predict(Clarifai.CELEBRITY_MODEL, this.state.input)
    .then(response => this.setFaceBox(this.calculateFaceLocation(response)))
    .catch(error => console.log(error))
  };

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  };

  render() {
    const { isSignedIn, route, box, linkURL } = this.state;
    return(
      <div className='App'>
        <ParticlesBg type="fountain" bg={true} />
        <SignIn isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home'
          ? <div>
              <Logo />
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
              <DetectImage box={box} linkURL={linkURL}/>
            </div>
          : ( route === 'signin'
                ? <SignInForm onRouteChange={this.onRouteChange} />
                : <Register onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    )
  }
}

export default App;
