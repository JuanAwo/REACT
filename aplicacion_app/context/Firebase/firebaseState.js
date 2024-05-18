import React, { useReducer} from 'react'
import firebase from '../../firebase'
import firebaseReducer from './firebaseReducer'
import FirebaseContext from './firebaseContext'
import CatalogoVehiculos from '../../src/screens/CatalogoVehiculos'
import {OBTENER_VEHICULOS_EXITO} from '../../types'
import _ from 'lodash'

const FirebaseState = props =>{
    //Crea el state Inicial 
    const initialState={
        CatalogoVehiculos:[]
    }

    //userReducer con el dispatch
    const [ state, dispatch] = useReducer(firebaseReducer,initialState)
    //Consultar productos
    const obtenerVehiculos = ()=>{
        //se hace consulta a firebase
        firebase.db
            .collection('vehiculos')
            .onSnapshot(manejarSnapschot) //para manejar la base de datos en tiempo real

        function manejarSnapschot(snapshot){
            let vehiculo = snapshot.docs.map(doc=>{
                return{
                    id: doc.id,
                    ...doc.data()
                }
            });

            //Ordenar informacion
            vehiculo = _.sortBy(vehiculo, 'categoriaScrollView')
            dispatch({
                type: OBTENER_VEHICULOS_EXITO,
                payload: vehiculo
            });
        }
    }
    return(
        <FirebaseContext.Provider
            value={{
                CatalogoVehiculos: state.CatalogoVehiculos,
                firebase,
                obtenerVehiculos
            }}
        >
    
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;