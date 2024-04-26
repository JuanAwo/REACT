import { View } from 'react-native'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AgendarPrueba from './src/screens/AgendarPrueba';
import CatalogoVehiculos from './src/screens/CatalogoVehiculos';
import SolicitudInformacion from './src/screens/SolicitudInformacion';
import SolicitudServicio from './src/screens/SolicitudServicio';
import FirebaseState from './context/Firebase/FirebaseState';
import PedidosState from './context/Vehiculos/vehiculosState';
import DetalleVehiculo from './src/screens/DetalleVehiculo';



const App = () => {
    const Stack = createStackNavigator();
  return (
    <FirebaseState>
        <PedidosState>
        <NavigationContainer>
         <Stack.Navigator>
             <Stack.Screen name='AgendarPrueba' component={AgendarPrueba}/>
             <Stack.Screen name='CatalogoVehiculos' component={CatalogoVehiculos}/>
             <Stack.Screen name='DetalleVehiculo' component={DetalleVehiculo}/>
             <Stack.Screen name='SolicitudInformacion' component={SolicitudInformacion}/>
             <Stack.Screen name='SolicitudServicio' component={SolicitudServicio}/>
             </Stack.Navigator>
         </NavigationContainer>
        </PedidosState>
    </FirebaseState>
  )
}

export default App
