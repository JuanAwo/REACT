import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import PropTypes from 'prop-types'; 

const CatalogoVehiculos = ({ vehiculos }) => {
  return (
    <FlatList
      data={vehiculos}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 20 }}>
          <Image source={{ uri: item.imagen }} style={{ width: 200, height: 150 }} />
          <Text>{item.marca} {item.modelo}</Text>
          <Text>{item.descripcion}</Text>
          <Text>Precio: {item.precio}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};


CatalogoVehiculos.propTypes = {
  vehiculos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      marca: PropTypes.string.isRequired,
      modelo: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
      imagen: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CatalogoVehiculos;
