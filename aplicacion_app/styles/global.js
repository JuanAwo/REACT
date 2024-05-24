import { ImageBackground, StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    contenedor:{
        marginHorizontal: '2.5%',
        flex: 1
    },
    button:{
        backgroundColor: 'rgb(0, 255, 225)'
    },
    buttonText:{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#000'
    },
    ImageBackground:{
        flex: 1,
    resizeMode: 'center', 
    justifyContent: 'center',
    }
})

export default globalStyles;