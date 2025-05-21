import * as React from "react";
import {StyleSheet, Text,TouchableOpacity, View } from "react-native";

const acceuil = ({navigation}) => {
    return (
        <View style={style.container}>
            <Text>Rajoelina</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7fff7"
    }
})

export default acceuil;