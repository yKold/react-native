import React from "react";
import { Text, View } from "react-native";

export default function ResultIMC(props){
    return(
        <View>
            <Text>{props.resultImc}</Text>
            <Text>{props.messageResultImc}</Text>
        </View>
    );
}