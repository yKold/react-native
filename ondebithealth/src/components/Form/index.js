import React from "react"
import { View ,Text, TextInput, Button } from "react-native"

export default function Form(){
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder="Ex. 1.75" keyboardType="numeric"/>
                <Text>Peso</Text>
                <TextInput placeholder="Ex. 76.365" keyboardType="numeric"/>
                <Button title="Calcular IMC"/>
            </View>
            <ResultIMC messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}