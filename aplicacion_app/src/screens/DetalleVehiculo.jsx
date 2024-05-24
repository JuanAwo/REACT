import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import {Box, Container, HStack} from 'native-base'
import VehiculosContext from '../../context/vehiculos/vehiculosContext'
import globalStyles from '../../styles/global'
import { Button, Card } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'


const DetalleVehiculo = () => {
  const navigate = useNavigation();
  const { Vehiculos} = useContext(VehiculosContext)
  const {Categoria, Descripcion, Imagen, Marca, Modelo, Precio, id} = Vehiculos
  return (
    <Box style={globalStyles.contenedor}>
        <Text>{Marca}</Text>
        <Card>
          <Card.Cover source={{uri:Imagen}}/>
          <Card.Content>
            <Text>La categoria es: {Categoria}</Text>
            <Text>El modelo es: {Modelo}</Text>
            <Text>El precio Es : {Precio}</Text>
            <Text> {Descripcion}</Text>
          </Card.Content>
          <Card.Actions>
            <Button
              onPress={()=> navigate.navigate('SolicitudServicio')}
            >
                <Text>Solicitar</Text>
            </Button>
          </Card.Actions>
          
        </Card>

    </Box>
  )
}

export default DetalleVehiculo;
