// function Pessoa(props) {

//     return (

//         <div>
//             <img src={props.foto} alt={props.nome} />
//             <h2>Nome: {propsnome}</h2>
//             <p>Idade: {props.idade}</p>
//             <p>profissao: {props.profissao}</p>
//         </div>

//     )

// };

// export default Pessoa;

function Pessoa({nome, idade, profissao, foto}) {

    return (

        <div>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>profissao: {profissao}</p>
        </div>

    )

};

export default Pessoa;