import Button from './evento/Button'

function Evento() {

    function meuEvento() {
        console.log(`Ativei o evento!`)
    }

    function meuEvento2() {
            console.log(`Ativei o evento2!`)
        }
    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button 
            event={meuEvento} 
            text="Primeiro evento" 
            />
            <Button 
            event={meuEvento2} 
            text="Segundo evento" 
            />
        </div>
    )
}

export default Evento