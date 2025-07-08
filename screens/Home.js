import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/*<TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}><Ionicons name="arrow-back" size={24} color="black" /></TouchableOpacity>*/}
      <Image source={require('./../assets/lemurien.png')} style={styles.logo} />
      <Text style={styles.title}>HITENY</Text>
      <TouchableOpacity style={styles.buttonFilled}onPress={() => navigation.navigate('connexion')}><Text style={styles.buttonFilledText}>Continuer sans compte</Text></TouchableOpacity>
      <TouchableOpacity style={styles.buttonOutline}onPress={() => navigation.navigate('inscription')}><Text style={styles.buttonOutlineText}>Créer un compte</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('connexion')} style={styles.buttonOutline}><Text style={styles.buttonOutlineText}>Se connecter</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    backButton: {
      position: 'absolute',
      top: 50,
      left: 20,
    },
    logo: {
      width: 100,
      height: 100,
      alignSelf: 'center',
      marginBottom: 20,
      top: -100
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#345C2A',
      textAlign: 'center',
      marginBottom: 40,
      top: -100
    },
    buttonFilled: {
      backgroundColor: '#345C2A',
      padding: 15,
      borderRadius: 10,
      marginBottom: 20,
    },
    buttonFilledText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    buttonOutline: {
      borderWidth: 1.5,
      borderColor: '#345C2A',
      padding: 15,
      borderRadius: 10,
      marginBottom: 15,
    },
    buttonOutlineText: {
      color: '#345C2A',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });
  
  export default Home