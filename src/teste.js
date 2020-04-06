import React, { Component } from "react" 
import {View, Text, StyleSheet} from "react-native"
import Simples from './componentes/simples'


export default class teste extends Component{
    render(){
        return(
            <View style={estilos.container}>
                {/* <Text style={estilos.fonte}>APP!</Text> */}
                <Simples texto="flexivel!"/>
            </View>
        );
    }
}

{/* */}
const estilos = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    fonte:{
        fontSize: 20
    }
});