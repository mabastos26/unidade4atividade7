import "./styles.css"
import logoPe from "../../img/logo-pe.jpg"
import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'

const Header=()=>{

    return(
        <div className="container-header">
            <div className="home"> 
                <Link to="/"><a className="aLogo">Home</a></Link>
                <img src={logoPe} alt="imagem não carregou"/>
                <h1>Pé Conforto</h1>
            </div>
            <ul>
                <li><Link to="/cadastro"><a className="aHeader">Cadastro</a></Link></li>
                <li><Link to="/produtos"><a className="aHeader">Produtos</a></Link></li>
            </ul>
        </div>
    )
}

export default Header;