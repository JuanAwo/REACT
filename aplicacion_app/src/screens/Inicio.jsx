import React from "react";
import {View, StyleSheet} from 'react-native'
import globalStyles from "../../styles/global";
import {Container, Button, Text} from 'native-base'
import { useNavigation } from "@react-navigation/native";

const Inicio = () => {
    const navigation = useNavigation();
      return (
        <Container style = {globalStyles.contenedor}>
            <View style={[globalStyles.contenedor, style.contenidoView]}>
                <Button
                  style= {globalStyles.button}
                  onPress={() => navigation.navigate('CatalogoVehiculos')}
                >
                  <Text style={ globalStyles.buttonText}>
                    Catalogo de Vehiculos 
                  </Text>
                </Button>
            </View>
        </Container>
     )
}

const style = StyleSheet.create({
    contenidoView:{
        flexDirection:'column',
        justifyContent:'center'
    }
})

export default Inicio;