import PropTypes from 'prop-types'

function Item(prop){
    return(
        <>
        <li>{prop.marca} - {prop.ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
}

export default Item