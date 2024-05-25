import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const Historial = ({ route }) => {
  const { cantidad, total } = route.params;
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  const enviarDatosAFirebase = () => {
    const db = firebase.firestore(); 
    const referencia = db.collection('Historial').doc();

    const datos = {
      nombres: nombres,
      apellidos: apellidos,
      correo: correo,
      telefono: telefono,
      cantidad: cantidad, 
      total: total 
    };

    referencia.set(datos)
      .then(() => {
        console.log("Datos enviados exitosamente a Cloud Firestore");
        Alert.alert('Gracias por tu compra');
        setNombres('');
        setApellidos('');
        setCorreo('');
        setTelefono('');
      })
      .catch((error) => {
        console.error("Error al enviar datos a Firestore:", error);
        Alert.alert('Error', 'Ocurrió un error al enviar los datos. Por favor, inténtalo de nuevo.');
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Nombres"
        value={nombres}
        onChangeText={setNombres}
      />
      <TextInput
        placeholder="Apellidos"
        value={apellidos}
        onChangeText={setApellidos}
      />
      <TextInput
        placeholder="Correo electrónico"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Teléfono (10 dígitos)"
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="numeric"
        maxLength={10}
      />
      <Button title="Comprar" onPress={enviarDatosAFirebase} />
    </View>
  );
};

export default Historial;
