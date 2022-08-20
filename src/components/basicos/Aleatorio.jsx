import React from 'react'

// MODO QUE FIZ
// export default (props) => {
//     const num = Math.floor(Math.random(props.min, props.max) * 10 + 1)
//     return (
//         <>
//             <h1> { props.titulo } </h1>
//             <h2>entre 1 e 10: </h2>        
//             <p>{ num }</p>

//         </>
//     )
// }

// Modo do Cod3R

export default props => {
    const {titulo, min, max} = props;
    const num = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>{titulo}</h2>
            <p>
                <strong>Valor mínimo: </strong> {min}
            </p>
            <p>
                <strong>Valor máximo: </strong> {max}
            </p>
            <p>
                <strong>Valor escolhido: </strong> {num}
            </p>
        </div>
    );
}