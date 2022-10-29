import "./styles.css"



const Produto=({legenda,pathFoto,descricao})=>{
 
    return(
        <div className="container-produto">
            <img src={pathFoto} alt="Foto não carrregada"/>
            <h3 className="legenda">{legenda}</h3>
            <p className="descrição">{descricao}</p>
        </div>
    )
}

export default Produto;