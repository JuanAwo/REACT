import { SELECCIONAR_VEHICULOS } from "../../types";

export default (state,action) =>{
    switch(action.type){
        case SELECCIONAR_VEHICULOS:
        return{
            ...state,
            vehiculos: action.payload
        }
        default:
            return state;
    }
}