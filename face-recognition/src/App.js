import React, {Component} from 'react'
import Nav from './components/nav/nav.js'
import Logo from './components/logo/logo.js'
import ImageLinkForm from './components/imageLink/imageLink.js'
import Rank from './components/rank/rank.js'
import './App.css';
import Particle from './components/particles/Particles.jsx'

class App extends Component{
  render(){
    return(
      <div className='app'>
        <Particle/>
        <Nav/>
        <Logo/>
        <Rank/>
        <ImageLinkForm/>
        {/* 
        
        <FaceRecognition/> */}
      </div>
    )
  }
}

export default App;
