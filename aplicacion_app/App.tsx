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
                  <Stack.Screen name='Inicio' component={Inicio}/>
                  <Stack.Screen name='CatalogoVehiculos' component={CatalogoVehiculos}/>
                  <Stack.Screen name='AgendarPrueba' component={AgendarPrueba}/>
                  <Stack.Screen name='SolicitudServicio' component={SolicitudServicio}/>
                  <Stack.Screen name='DetalleVehiculo' component={DetalleVehiculo}/>
                  <Stack.Screen name='SolicitudInformacion' component={SolicitudInformacion}/>
                </Stack.Navigator>
            </VehiculosState>
        </FirebaseState>
      </NavigationContainer>
      </NativeBaseProvider>
  )
}

export default App
