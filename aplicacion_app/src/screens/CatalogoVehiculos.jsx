import React from 'react';
import CatalogoVehiculos from './src/screens/CatalogoVehiculos';

const App = () => {
  const vehiculos = [
    { id: 1, marca: 'Marca1', modelo: 'Modelo1', descripcion: 'Descripción1', precio: 10000, imagen: 'https://ejemplo.com/imagen1.jpg' },
    { id: 2, marca: 'Marca2', modelo: 'Modelo2', descripcion: 'Descripción2', precio: 15000, imagen: 'https://ejemplo.com/imagen2.jpg' },
  ];

  return <CatalogoVehiculos vehiculos={vehiculos} />;
}

export default App;
