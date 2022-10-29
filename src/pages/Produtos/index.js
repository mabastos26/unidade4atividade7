import Produto from "../../componentes/Produto"
import "./styles.css"
import produto1 from "../../img/tenis1.jpg"
import produto2 from "../../img/tenis2.jpg"
import produto3 from "../../img/tenis3.jpg"
import produto4 from "../../img/tenis4.jpg"
import produto5 from "../../img/tenis5.jpg"
import produto6 from "../../img/tenis6.jpg"


const Produtos=()=>{
    return(
        <div className="container-produtos">
            <Produto legenda="Tênis Adidas preto com solado branco" descricao="Mais conforto para sua caminhada" pathFoto={produto1}/>
            <Produto legenda="Tênis Nike slim" descricao="Mais resistência para sua corrida" pathFoto={produto2}/>
            <Produto legenda="Tênis Nike branco" descricao="Estilo e preticeidade" pathFoto={produto3}/>
            <Produto legenda="Allstar azul cano médio" descricao="Te acompanha em qualquer parada" pathFoto={produto4}/>
            <Produto legenda="Nike arco-íris" descricao="Modernidade é tudo" pathFoto={produto5}/>
            <Produto legenda="Tênis New Balance" descricao="Garanta alto desempenho na sua corrida" pathFoto={produto6}/>
        </div>
    )
}

export default Produtos;