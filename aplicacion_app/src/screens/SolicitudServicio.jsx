import React, { useEffect, useState, useContext } from 'react';
import { Alert } from 'react-native';
import VehiculosContext from '../../context/vehiculos/vehiculosContext';
import { Container, Box, FormControl, HStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, TextInput, Card } from 'react-native-paper';
import firebase from 'firebase/compat/app';
import Historial from './Historial';

const SolicitudServicio = () => {
  const navigate = useNavigation();
  const [cantidad, guardarCantidad] = useState(1);
  const [total, guardarTotal] = useState(0);

  const { Vehiculos, guardarVehiculo } = useContext(VehiculosContext);
  const { Precio } = Vehiculos;

  const incrementar = () => {
    const nuevaCantidad = parseInt(cantidad) + 1;
    guardarCantidad(nuevaCantidad);
  };

  const decrementar = () => {
    if (cantidad > 1) {
      const nuevaCantidad = parseInt(cantidad) - 1;
      guardarCantidad(nuevaCantidad);
    }
  };

  const calcularTotal = () => {
    const totalPagar = cantidad * Precio;
    guardarTotal(totalPagar);
  };

  useEffect(() => {
    calcularTotal();
  }, [cantidad]);

  return (
    <Container>
      <Box>
        <FormControl>
          <Text>Cantidad</Text>
          <HStack space={3}>
            <Button onPress={decrementar}>-</Button>
            <TextInput
              value={cantidad.toString()}
              onChangeText={(text) => {
                const newValue = parseInt(text) || 0;
                guardarCantidad(newValue);
              }}
            />
            <Button onPress={incrementar}>+</Button>
          </HStack>
          <Text>Total a pagar: ${total}</Text>
          <Button
           onPress={()=> navigate.navigate('Historial', {cantidad: cantidad, total: total})

           }
          >
          Comprar</Button>
        </FormControl>

      </Box>
    </Container>
  );
};

export default SolicitudServicio;

