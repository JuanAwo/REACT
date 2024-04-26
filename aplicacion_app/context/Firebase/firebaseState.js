import React, { usereducer} from 'react'

import FirebaseReducer from './firebaseReducer'
import FirebaseContext from './firebaseContext'

const FirebaseState = props =>{
    //Crea el state Inicial 
    const initialState={
        menu:[]
    }

    //userReducer con el dispatch
    const [ state, dispatch] = usereducer(FirebaseReducer,initialState)

    return(
        <FirebaseContext.Provider
            value={{
                menu: state.menu

            }}
        >
    
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;