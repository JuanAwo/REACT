import { OBTENER_VEHICULOS_EXITO } from "../../types";
export default (state,action) =>{
    switch(action.type){
        case OBTENER_VEHICULOS_EXITO:
            return{
                ...state,
                CatalogoVehiculos: action.payload
            }
            
        default:
            return state;
    }
}