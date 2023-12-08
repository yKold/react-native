import React, {Component} from 'react'
import Nav from './components/nav/nav.js'
import Logo from './components/logo/logo.js'
import ImageLinkForm from './components/imageLink/imageLink.js'
import './App.css';

class App extends Component{
  render(){
    return(
      <div className='app'>
        <Nav/>
        <Logo/>
        <ImageLinkForm/>
        {/* 
        
        <FaceRecognition/> */}
      </div>
    )
  }
}

export default App;
