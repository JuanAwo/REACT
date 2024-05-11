import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import {Box, Container, HStack} from 'native-base'
import VehiculosContext from '../../context/vehiculos/vehiculosContext'
import globalStyles from '../../styles/global'
import { Button, Card } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'


const DetalleVehiculo = () => {
  const navigate = useNavigation();
  const { SolicitudServicio} = useContext(VehiculosContext)
  const {categoria, descripcion, imagen, marca, modelo, precio, id} = SolicitudServicio
  return (
    <Box style={globalStyles.contenedor}>
        <Text>{marca}</Text>
        <Card>
          <Card.Cover source={{uri:imagen}}/>
          <Card.Content>
            <Text>La categoria es: {categoria}</Text>
            <Text> {descripcion}</Text>
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
