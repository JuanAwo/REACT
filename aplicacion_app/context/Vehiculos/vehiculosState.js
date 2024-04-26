import React, { usereducer} from 'react'
import PedidosContext from './vehiculosContext'
import PedidosReducer from './vehiculosReducer'

const PedidosState = props =>{
    //Crea el state Inicial 
    const initialState={
        menu:[]
    }

    //userReducer con el dispatch
    const [ state, dispatch] = usereducer(PedidosReducer,initialState)

    return(
        <PedidosContext.Provider
            value={{
                pedido: state.pedido

            }}
        >
    
            {props.children}
        </PedidosContext.Provider>
    )
}

export default PedidosState;