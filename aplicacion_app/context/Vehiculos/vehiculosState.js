import React, { useReducer} from 'react'
import VehiculosContext from './vehiculosContext'
import VehiculosReducer from './vehiculosReducer'
import SolicitudServicio from '../../src/screens/SolicitudServicio'
import { SELECCIONAR_VEHICULOS } from '../../types'

const VehiculosState = props =>{
    //Crea el state Inicial 
    const initialState={
        SolicitudServicio:[],
        Vehiculos: null
    }

    //userReducer con el dispatch
    const [ state, dispatch] = useReducer(VehiculosReducer,initialState)
    //seleccionar y obtener el producto

    const seleccionarVehiculos = Vehiculos =>{
        dispatch({
            type: SELECCIONAR_VEHICULOS,
            payload: Vehiculos
        })
    }
    return(
        <VehiculosContext.Provider
            value={{
                SolicitudServicio: state.SolicitudServicio,
                Vehiculos: state.Vehiculos,
                seleccionarVehiculos

            }}
        >
    
            {props.children}
        </VehiculosContext.Provider>
    )
}

export default VehiculosState;