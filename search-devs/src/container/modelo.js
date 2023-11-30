import React from "react";

const Modelo = (props) => {
    const {name, login} = props
    return(<div>
        <h1>{name}</h1>
        <h3>{login}</h3>
    </div>)
}

export default Modelo