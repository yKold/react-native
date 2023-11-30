import React from "react";
import './usuario.css'

const Usuario = (props) => {
    const {email, login, location, bio, twitter_username, followers, following, html_url} = props
    return(
        <div className="container">
            <h1>login: {login}</h1>
            <h2>Email: {email}</h2>
            <h2>Location: {location}</h2>
            <h2>Bio: {bio}</h2>
            <h2>Twitter_username: {twitter_username}</h2>
            <h2>Followers: {followers}</h2>
            <h2>Following: {following}</h2>
            <h2>Html_url: {html_url}</h2>
        </div>
    )
}

export default Usuario