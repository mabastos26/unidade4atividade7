import './css/index.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { useSelector,useDispatch } from "react-redux";
import {Link} from 'react-router-dom'



const Cadastro=()=>{
//Variavel global reducer
const numeroCliente=useSelector(states=>states.ClienteReducer.numeroCliente);
const dispatch=useDispatch();

const alteraNumero=()=>{
    dispatch({
        type: "SET_NUMERO",
        payload:{
            numeroCliente: numeroCliente+1
        }
    })
}
//declaração dos useStates
const [nome,setNome]=useState('');
const [email,setEmail]=useState('');
const [clientes,setClientes]=useState([]);

//Função que realiza o cadastro do Cliente no BD
const saveCliente= async ()=>{
    console.log("entrou na funcao");
    const cliente = await axios.post("http://localhost:8080/cliente",{
        nome,
        email
    });
    alert(`O cliente ${cliente.data.nome} foi cadastrado com sucesso.`);
    alteraNumero();
 }

 //Função  que busca todos os clientes no BD
 const getClientes=async()=>{
    const cli = await axios.get("http://localhost:8080/cliente");
    setClientes(cli.data);
    console.log(cli);
 }


const elementoPadrao=
<div className="form">
    <h3>NOME:</h3>
    <input placeholder="Digite seu nome" onChange={(txt)=>setNome(txt.target.value)}/>
    <h3>E-MAIL:</h3>
    <input placeholder="Digite seu e-mail" onChange={(txt)=>setEmail(txt.target.value)}/>
    <button onClick={saveCliente}>cadastrar</button>
</div>

//Elemento que anuncia que um cliente ganhou o cupom.
const elementoGanhou=
<di className="ganhou-promo">
    <p>Parabéns {nome}! temos {numeroCliente} clientes cadastrados!!! Você ganhou um CUPOM de deconto de 30% em todos os nossos produtos.</p>
    <div>
        Cupom: GANHEI
    </div>
    <Link to="/produtos"><a>usar agora o meu cupom!</a></Link>
</di>



//Código que mostra as informações na tela

if(numeroCliente%2){
    return(
        <div className="container-cadastro">
            {elementoPadrao}
            {elementoGanhou}
        </div>

    )
}else{
return(
    <div className="container-cadastro">
        {elementoPadrao}
    </div>
    )
    }
}

export default Cadastro;