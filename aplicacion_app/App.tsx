import 'react-native-gesture-handler'
import React from 'react';
import { View } from 'react-native'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AgendarPrueba from './src/screens/AgendarPrueba';
import CatalogoVehiculos from './src/screens/CatalogoVehiculos';
import SolicitudInformacion from './src/screens/SolicitudInformacion';
import SolicitudServicio from './src/screens/SolicitudServicio';
import FirebaseState from './context/firebase/firebaseState';
import DetalleVehiculo from './src/screens/DetalleVehiculo';
import VehiculosState from './context/vehiculos/vehiculosState';
import Inicio from './src/screens/Inicio';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const App = () => {
    const Stack = createStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <FirebaseState>
            <VehiculosState>
                <Stack.Navigator>
                  <Stack.Screen name='Inicio' component={Inicio}
                  options={{title:'Inicio'}}
                  />
                  <Stack.Screen name='CatalogoVehiculos' component={CatalogoVehiculos}
                  options={{title:'CatalogoVehiculo'}}
                  />
                  <Stack.Screen name='DetalleVehiculo' component={DetalleVehiculo}
                  options={{title:'Detalle Vehiculo'}}
                  />
                  <Stack.Screen name='SolicitudServicio' component={SolicitudServicio}
                  options={{title:'Solicitud Servicio'}}
                  />
                  <Stack.Screen name='AgendarPrueba' component={AgendarPrueba}
                  options={{title:'Agendar Prueba'}}
                  />
                  <Stack.Screen name='SolicitudInformacion' component={SolicitudInformacion}
                  options={{title:'Solicitud Informacion'}}
                  />
                </Stack.Navigator>
            </VehiculosState>
        </FirebaseState>
      </NavigationContainer>
      </NativeBaseProvider>
  )
}

export default App
