import React, {Component} from "react";
import Usuario from './usuario.js'
import './App.css'


class App extends Component {
    
    constructor(){
        super()
        this.state = {
            user: '',
            objct: {},
            login: '',
            email: '',
            location: '',
            bio: '',
            twitter_username: '',
            followers: '',
            following: '',
            html_url: '',
        }
    }

    pegarValue = (event) => {
        console.log(event.target.value)
        this.setState({user: event.target.value})
        fetch(`https://api.github.com/users/${this.state.user}`)
          .then(response => response.json())
          .then(data => {
            this.setState({ 
                objct: data, 
                login: data.login, 
                email: data.email, 
                location: data.location,
                bio: data.bio,
                twitter_username: data.twitter_username,
                followers: data.followers,
                following: data.following,
                html_url: data.html_url, 
            }, () => {
              console.log(this.state);
            });
          })
          .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });
    }

    render(){
        return(
            <div className="container_principal">
                <div>
                    <input id="texto" type="text" placeholder="Type the username here..." onChange={this.pegarValue}/>
                </div>
                <Usuario
                    login={this.state.user} 
                    email={this.state.login} 
                    location={this.state.location} 
                    bio={this.state.bio} 
                    twitter_username={this.state.twitter_username} 
                    followers={this.state.followers} 
                    following={this.state.following} 
                    html_url={this.state.html_url}/>
            </div>
        )
    }
}
export default App