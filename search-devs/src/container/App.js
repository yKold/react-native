import React, {Component} from "react";
import Usuario from './usuario.js'
import './App.css'


class App extends Component {
    
    constructor(){
        super()
        this.state = {
            nome: [],
        }
    }
    pegarValue = (event) => {
        console.log(event.target.value)
        this.setState({user: event.target.value})
    }
// resolver
    // componentDidMount(){
    //     fetch(`https://api.github.com/users/${this.state.user}`)
    //     .then(response=> response.json())
    //     .then(data => this.setState({nome: data}))
    // }

    // click = () =>{
    //     console.log(this.state.nome)
    // }

    render(){
        return(
            <div>
                <input id="texto" type="text" placeholder="Type the username here..." onChange={this.pegarValue}/>
                <button onClick={this.click}>aasdasds</button>
                <Usuario />
            </div>
        )
    }
}
export default App