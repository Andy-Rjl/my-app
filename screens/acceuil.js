import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { MaterialIcons, FontAwesome5, Entypo, Ionicons, AntDesign } from '@expo/vector-icons';


const Accueil = ({navigation}) => {
    return (
        <View style={style.container}>
            <Text style={style.textacceuil}>Acceuil</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Accueil')} style={style.button}><MaterialIcons name="chat-bubble-outline" color="#004d40" size={40}/><Text style={style.text}>Apprendre</Text><Image source={require('./../assets/apprendre.png')} style={style.image} /></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Accueil')} style={style.button}><FontAwesome5 name="shopping-basket" color="#004d40" size={40}/><Text style={style.text}>Decouvrir des cultures</Text><Image source={require('./../assets/decouvrir.png')} style={style.image} /></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Accueil')} style={style.button}><Entypo name="open-book" color="#004d40" size={40}/><Text style={style.text}>Decouvrir des mythes</Text><Image source={require('./../assets/mythe.png')} style={style.image} /></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('traduction')} style={style.button}><Ionicons name="language" color="#004d40" size={40}/><Text style={style.text}>Traduction</Text><Image source={require('./../assets/traduction.png')} style={style.image}/></TouchableOpacity>
            <View style={style.navigation}>
                <TouchableOpacity><AntDesign name="home" size={30} color={"#004d40"} style={style.icons}/></TouchableOpacity>
                <TouchableOpacity><Ionicons name="albums-outline" size={30} color={"#004d40"} style={style.icons}/></TouchableOpacity>
                <TouchableOpacity><Ionicons name="leaf-outline" size={30} color={"#004d40"} style={style.icons}/></TouchableOpacity>
                <TouchableOpacity><Ionicons name="notifications-outline" size={30} color={"#004d40"} style={style.icons}/></TouchableOpacity>
                <TouchableOpacity><Ionicons name="person-outline" size={30} color={"#004d40"} style={style.icons}/></TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f7fff7"
    },
    textacceuil: {
        fontSize: 50,
        color: "#004d40",
        marginBottom: 20
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f7fff7",
        borderWidth: 1,
        borderColor: '#004d40',
        borderRadius: 6,
        marginBottom: 10,
        width: 350,
        height: 100,
        paddingLeft: 20
    },
    text: {
        float: "left",
        color: "#004d40",
        marginLeft: 10,
        marginRight: 50,
        flex: 1,
        fontSize: 20
    },
    image:{
        width: 98,
        height: 98,
        resizeMode: "contain",
        marginRight: 10,
    },
    navigation:{
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#004d40",
        borderRadius: 6,
        marginTop: 20,
        padding: 10
    },
    icons: {
        marginLeft: 35
    }
})

export default Accueil;
