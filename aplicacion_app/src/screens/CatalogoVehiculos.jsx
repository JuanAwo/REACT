import React, {useEffect,useContext, Fragment} from 'react';
import { View} from 'react-native';
import globalStyles from '../../styles/global';
import { useNavigation, useNavigationBuilder } from '@react-navigation/native';
import firebaseContext from '../../context/firebase/firebaseContext';
import VehiculosContext from '../../context/vehiculos/vehiculosContext';
//import { Fragment, useContext, useEffect } from 'react';
import { NativeBaseProvider,ScrollView,Text,Avatar} from 'native-base';
import {List} from 'react-native-paper'
import DetalleVehiculo from './DetalleVehiculo';



const CatalogoVehiculos = () => {
  const navigation = useNavigation();
  const {CatalogoVehiculos,obtenerVehiculos} = useContext(firebaseContext)
  const {seleccionarVehiculos} = useContext(VehiculosContext)

  useEffect(()=>{
    obtenerVehiculos()
  }, [])
  return (
    <NativeBaseProvider>
        <ScrollView>
          <View>
             {CatalogoVehiculos.map((vehiculo, i)=>{
                const {categoria, descripcion, imagen, marca, modelo, precio, id} = plato
                return(
                  <Fragment>
                    <Avatar size='70px' source={{uri:imagen}}></Avatar>
                    <List.Item
                      title = {marca}
                      description = {descripcion}
                      onPress = {()=> navigation.navigate(DetalleVehiculo)}
                    >
                    <Text
                      numberOfLines={3}
                    >{marca}</Text>
                    <Text>{precio}</Text>
                    </List.Item>
                    
                  </Fragment>
                )
             })} 
          </View>
        </ScrollView>
    </NativeBaseProvider>
  )
}



export default CatalogoVehiculos;
