import React, {useEffect,useContext, Fragment} from 'react';
import { View, Text } from 'react-native';
import globalStyles from '../../styles/global';
import { useNavigation, useNavigationBuilder } from '@react-navigation/native';
import firebaseContext from '../../context/firebase/firebaseContext';
import VehiculosContext from '../../context/vehiculos/vehiculosContext';
import { Fragment, useContext, useEffect } from 'react';




const CatalogoVehiculos = () => {
  const navigation = useNavigation();
  const {CatalogoVehiculos,obtenerVehiculos} = useContext(firebaseContext)
  const {seleccionarVehiculos} = useContext(VehiculosContext)

  useEffect(()=>{
    obtenerVehiculos()
  }, [])
  return (
    <View>
      <Text>Catalogo pa</Text>
    </View>
  )
}



export default CatalogoVehiculos;
