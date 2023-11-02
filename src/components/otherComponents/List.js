import Item from './Item'

function List() {
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" anoLancamento={1969}/>
                <Item marca="Ford" anoLancamento={1970}/>
                <Item marca="Uno"/>
                <Item anoLancamento="2000"/>
            </ul>
        </>
    )
}

export default List