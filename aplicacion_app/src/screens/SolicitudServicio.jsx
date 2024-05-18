import React, {useEffect, useState, useContext} from 'react'
import { Alert } from 'react-native'
import VehiculosContext from '../../context/vehiculos/vehiculosContext'
import {Container, Box, FormControl, HStack} from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { Button, Text, TextInput, Card} from 'react-native-paper'
import firebase from 'firebase/compat/app'


const SolicitudServicio = () => {
  const [cantidad, guardadCantidad] = useState(1);
  const [total, guardarTotal] = useState(0)

  const {vehiculo, guardarVehiculo} = useContext(VehiculosContext)
  const {precio} = vehiculos
  const incrementar = ()=>{
    const nuevaCantidad = parseInt(cantidad)+1
    guardadCantidad(nuevaCantidad)

  }

  const decrementar = ()=>{
    if(cantidad>1){
      const nuevaCantidad = parseInt(cantidad)-1
      guardadCantidad(nuevaCantidad)
    }
  }

  const calcularTotal = ()=>{
    const totalPagar = cantidad * precio
    guardarTotal (totalPagar)
  }
  
  useEffect(()=>{
    calcularTotal()
  }, [cantidad])

   return (
    <Container>
      <Box>
        <FormControl>
          <Text>Cantidad</Text>
          <HStack space={3}>
            <Button
              onPress={()=>decrementar()}
            >
              -
            </Button>
            <TextInput
              value= {cantidad}
              onChangeText={cantidad => guardadCantidad(cantidad)}
            
            />
            <Button
              onPress={()=>incrementar}
            >
              +
            </Button>


          </HStack>
          <Text>Total a pagar: ${total}</Text>
        </FormControl>
      </Box>
    </Container>
  )
}

export default SolicitudServicio;