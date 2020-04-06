import React from 'react'
import {Text} from "react-native"
import Padrao from '../estilos/padrao'

{/*
export default function (props){
return <Text>{props.texto}</Text>;
}
*/}

export default (props) => <Text style={[Padrao.exercicio]}>Arrow: {props.texto}</Text>;
