import React, { useReducer} from 'react'
import VehiculosContext from './vehiculosContext'
import VehiculosReducer from './vehiculosReducer'
import SolicitudServicio from '../../src/screens/SolicitudServicio'
import { SELECCIONAR_VEHICULOS,
    GUARDAR_VEHICULO

} from '../../types'

const VehiculosState = props =>{
    //Crea el state Inicial 
    const initialState={
        SolicitudServicio:[],
        Vehiculos: null
    }

    //userReducer con el dispatch
    const [ state, dispatch] = useReducer(VehiculosReducer,initialState)
    //seleccionar y obtener el vehiculo

    const seleccionarVehiculos = Vehiculos =>{
        dispatch({
            type: SELECCIONAR_VEHICULOS,
            payload: Vehiculos
        })
    }
    
    const guardarVehiculo = vehiculo =>{
        dispatch({
            type: GUARDAR_VEHICULO,
            payload: vehiculo
        })
    }


    return(
        <VehiculosContext.Provider
            value={{
                SolicitudServicio: state.SolicitudServicio,
                Vehiculos: state.Vehiculos,
                seleccionarVehiculos,
                guardarVehiculo

            }}
        >
    
            {props.children}
        </VehiculosContext.Provider>
    )
}

export default VehiculosState;
