function Card(props) {
    return (
        <div className="card">
            <h2>{props.nome}</h2>
            <img src={props.imgLink} alt=""/>
            <p><strong>posição: </strong>{props.posição}</p>
            <p><strong>Descrição: </strong>{props.desc}</p>
        </div>
    )
}

export default Card