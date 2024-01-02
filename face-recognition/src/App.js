import React, {Component} from 'react'
import Nav from './components/nav/nav.js'
import Logo from './components/logo/logo.js'
import ImageLinkForm from './components/imageLink/imageLink.js'
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'
import Rank from './components/rank/rank.js'
import './App.css';
import Particle from './components/particles/Particles.jsx'


class App extends Component{

  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: ''
    }
  }


  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})

    const PAT = 'c504ae0deea34cde8060909dc50abcda';
    const USER_ID = 'ykold ';
    const APP_ID = 'jotinha';
    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';
    const IMAGE_URL = this.state.input;

    const raw = JSON.stringify({
      "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": IMAGE_URL
                  }
              }
          }
      ]
    });
  
    const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
      },
      body: raw
    };

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
    .then(response => response.json())
    .then(result => {
      'a'
    })
    .catch(error => console.log('error', error));
  }

  render(){
    return(
      <div className='app'>
        <Particle/>
        <Nav/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}  />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    )
  }
}

export default App;
