import styles from './SayMyName.module.css'

function SayMyName(props){
    return(
        <div className='container'>
            <p>Esta é uma frase teste para o {props.nome}</p>
        </div>
    )
}

export default SayMyName