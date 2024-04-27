import React, { useReducer} from 'react'

import firebaseReducer from './firebaseReducer'
import FirebaseContext from './firebaseContext'
import CatalogoVehiculos from '../../src/screens/CatalogoVehiculos'

const FirebaseState = props =>{
    //Crea el state Inicial 
    const initialState={
        CatalogoVehiculos:[]
    }

    //userReducer con el dispatch
    const [ state, dispatch] = useReducer(firebaseReducer,initialState)

    return(
        <FirebaseContext.Provider
            value={{
                CatalogoVehiculos: state.CatalogoVehiculos

            }}
        >
    
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;