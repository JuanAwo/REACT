import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SolicitarPruebas = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    identificacion: '',
    celular: ''
  });

  const [error, setError] = useState({});

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    const validacionErrores = validacionForm(formData);
    if (Object.keys(validacionErrores).length === 0) {
      console.log('Datos del formulario:', formData);
    } else {
      setError(validacionErrores);
    }
  };

  const validacionForm = (data) => {
    let error = {};
    if (!data.nombre.trim()) {
      error.nombre = 'El nombre es requerido';
    }
    if (!data.apellido.trim()) {
      error.apellido = 'El apellido es requerido';
    }
    if (!data.identificacion.trim()) {
      error.identificacion = 'La identificación es requerida';
    } else if (isNaN(data.celular) || data.celular.length !== 11) {
      error.celular = 'El número de identificación debe tener 11 dígitos numéricos';
    }
    if (!data.celular.trim()) {
      error.celular = 'El número de celular es requerido';
    } else if (isNaN(data.celular) || data.celular.length !== 10) {
      error.celular = 'El número de celular debe tener 10 dígitos numéricos';
    }
    return error;
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={(value) => handleChange('nombre', value)}
        value={formData.nombre}
        placeholder='Nombre'
      />
      {error.nombre && <Text style={{ color: 'red' }}>{error.nombre}</Text>}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={(value) => handleChange('apellido', value)}
        value={formData.apellido}
        placeholder='Apellido'
      />
      {error.apellido && <Text style={{ color: 'red' }}>{error.apellido}</Text>}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={(value) => handleChange('identificacion', value)}
        value={formData.identificacion}
        placeholder='Identificacion'
      />
      {error.identificacion && <Text style={{ color: 'red' }}>{error.identificacion}</Text>}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={(value) => handleChange('celular', value)}
        value={formData.celular}
        placeholder='Celular'
      />
      {error.celular && <Text style={{ color: 'red' }}>{error.celular}</Text>}
      <Button onPress={handleSubmit} title='Enviar' />
    </View>
  );
};

export default SolicitarPruebas;
