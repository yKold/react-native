import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Renault" ano_lancamento={'1998'}></Item>
            </ul>
        </>
    )
}

export default List