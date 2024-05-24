import React, {useEffect,useContext, Fragment} from 'react';
import { View} from 'react-native';
import globalStyles from '../../styles/global';
import { useNavigation, useNavigationBuilder } from '@react-navigation/native';
import firebaseContext from '../../context/firebase/firebaseContext';
 import VehiculosContext from '../../context/vehiculos/vehiculosContext';
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
                const {Categoria, Descripcion, Imagen, Marca, Modelo, Precio, id} = vehiculo
                console.log(Descripcion) 
                return(
                  <Fragment>
                    <Avatar size="70px" source={{uri:Imagen}}></Avatar>
                    <List.Item
                      title = {Marca}
                      description = {Descripcion}
                      onPress = {()=> {
                        seleccionarVehiculos(vehiculo)
                        navigation.navigate(DetalleVehiculo)
                      }}
                    >
                    <Text
                      numberOfLines={3}
                    >{Marca}La marca es:</Text>
                    <Text>{Precio}El precio es:</Text>
                    <Text>{Categoria} La Categoria es:</Text>
                    </List.Item>
                  </Fragment>
                )
             })} 
          </View>
        </ScrollView>
    </NativeBaseProvider>
  );
}



export default CatalogoVehiculos;
