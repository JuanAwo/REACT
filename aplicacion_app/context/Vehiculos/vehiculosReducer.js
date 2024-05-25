import { SELECCIONAR_VEHICULOS, GUARDAR_VEHICULO } from "../../types";

export default (state,action) =>{
    switch(action.type){
        case SELECCIONAR_VEHICULOS:
        return{
            ...state,
            Vehiculos: action.payload
        }
        
        case GUARDAR_VEHICULO:
            return{
                ...state,
                vehiculo: action.payload
            }
        default:
            return state;
    }
}