const initialState={
    numeroCliente: 0
  
}
const ClienteReducer=(state=initialState, action)=>{

    switch(action.type){
        case "SET_NUMERO":
            return({// Se der match ele retorna o componente com o nome trocado
                ...state, 
                numeroCliente: action.payload.numeroCliente        
            })
    }
    return state;  
}

export default ClienteReducer