import React from "react";

const Usuario = (props) => {
    const {nome, login} = props
    return(
        <div>
            <h1>{nome}</h1>
            <h2>{login}</h2>
        </div>
    )
}

export default Usuario