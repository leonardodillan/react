import apagar from "../../data/apagar";

export default props => {
    
    const afazer = apagar.map( tarefa =>{
        return (
            <li key={tarefa.id}>
                { tarefa.hora } - { tarefa.tarefa }
            </li>
        )
    });

    return (
        <ul style={ {listStyle: "none"}}>
            { afazer }
        </ul>
    )

}