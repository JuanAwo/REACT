import React from 'react';
import CatalogoVehiculos from './src/screens/CatalogoVehiculos';
import BusquedaVehiculos from './src/screens/BusquedaVehiculos';
//import SolicitarPruebas from './src/screens/SolicitarPruebas';

const App = () => {
  const vehiculos = [
    { id: 1, marca: 'Chevrolet', modelo: '2024', descripcion: 'Vehiculo completamente Nuevo', precio: 88990000, imagen: 'https://www.chevrolet.com.co/content/dam/chevrolet/south-america/colombia/espanol/index/cars/2020-onix-turbo-hb/08-images/onix-hb-nuevo-mh/mayo-2023/onix-turbo-hb.png?imwidth=960' },
    { id: 2, marca: 'Renult', modelo: '2019', descripcion: 'Vehiculo Usado', precio: 57000000, imagen: 'https://www.renault.com.co/agg/vn/unique/grade_carrousel_main_1_small/grade_carrousel_1.png?uri=https%3A%2F%2Fco.co.rplug.renault.com%2Fproduct%2Fmodel%2FMAH%2Fcaptur%2Fc%2FA-ENS_0MDL2P1SERIELIM1_-TEHNP' },
    { id: 3, marca: 'Renult', modelo: '2019', descripcion: 'Vehiculo Usado', precio: 57000000, imagen: 'https://www.renault.com.co/agg/vn/unique/grade_carrousel_main_1_small/grade_carrousel_1.png?uri=https%3A%2F%2Fco.co.rplug.renault.com%2Fproduct%2Fmodel%2FMAH%2Fcaptur%2Fc%2FA-ENS_0MDL2P1SERIELIM1_-TEHNP' },
    { id: 4, marca: 'Renult', modelo: '2019', descripcion: 'Vehiculo Usado', precio: 57000000, imagen: 'https://www.renault.com.co/agg/vn/unique/grade_carrousel_main_1_small/grade_carrousel_1.png?uri=https%3A%2F%2Fco.co.rplug.renault.com%2Fproduct%2Fmodel%2FMAH%2Fcaptur%2Fc%2FA-ENS_0MDL2P1SERIELIM1_-TEHNP' },
    

  ];

  
  return <CatalogoVehiculos vehiculos={vehiculos} />;

}




export default App;
