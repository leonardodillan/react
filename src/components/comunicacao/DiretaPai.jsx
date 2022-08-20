import DiretaFilho from "./DiretaFilho"

export default props => {
    return (
        <div>
            <DiretaFilho nome="Junior" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Gabriel" idade={23} nerd={false}></DiretaFilho>
        </div>
    )
}