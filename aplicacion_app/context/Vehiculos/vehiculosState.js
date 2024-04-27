import React, { useReducer} from 'react'
import VehiculosContext from './vehiculosContext'
import VehiculosReducer from './vehiculosReducer'
import SolicitudServicio from '../../src/screens/SolicitudServicio'

const VehiculosState = props =>{
    //Crea el state Inicial 
    const initialState={
        SolicitudServicio:[]
    }

    //userReducer con el dispatch
    const [ state, dispatch] = useReducer(VehiculosReducer,initialState)

    return(
        <VehiculosContext.Provider
            value={{
                SolicitudServicio: state.SolicitudServicio

            }}
        >
    
            {props.children}
        </VehiculosContext.Provider>
    )
}

export default VehiculosState;