
import "./styles.css"
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";

const Home=()=>{
    const numeroCliente=useSelector(states=>states.ClienteReducer.numeroCliente);

    return(
        <div className="container-Home">
            <div className="container-left">
                <div className="subcontainer-top">
                    <h1>Seja Bem-Vindo ao nosso portal de vendas!</h1>
                    <p>Com mais de 100 anos no mercado de calçados, a pé conforto tem a melhor solução 
                    para atender às suas necessidades estéticas e ortopédicas</p>
                    <Link to="/produtos"><a className="aHome">Conheça os nossos produtos</a></Link>
                </div>
                <div className="subcontainer-bottom">
                    <h1>Promoção do mês!!</h1>
                    <p><Link to="/cadastro"><a className="aHome">Cadastre</a></Link> seu nome e email.
                    Sempre que o número de clientes cadastrados for ímpar, vocês ganharão um presente exclusivo.</p>
                    <h2>Clientes Cadastrados: {numeroCliente}</h2>

                </div>
            </div>
            <div className="container-right">
                <h3>Está com dúvidas sobre a melhor solução para seus pés? Sem problemas, nosso especialista responde.</h3>
                <section>
                    <iframe  width="700" height="506" src="https://www.youtube.com/embed/w2GO83aUHf4" title="DICAS: Como escolher um Tênis? | Pés Sem Dor 👟" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </section>
            </div>
        </div>
    )
}

export default Home;