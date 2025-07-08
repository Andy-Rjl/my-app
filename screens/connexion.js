import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './locales/firebase';




export default function Connexion({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Connexion réussie ✅');
      navigation.navigate('accueil'); // adapte selon ton app
    } catch (error) {
      alert('Erreur : ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Flèche de retour */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Logo */}
      <Image source={require('./../assets/lemurien.png')} style={styles.logo} />

      {/* Titre */}
      <Text style={styles.title}>HITENY</Text>
      <Text style={styles.subtitle}>Se connecter</Text>

      {/* Champ Email */}
      <View style={styles.inputContainer}>
        <Entypo name="email" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="votremail@gmail.com"
          placeholderTextColor="#fff"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Champ Mot de passe */}
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          placeholderTextColor="#fff"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Bouton s’inscrire */}
      <TouchableOpacity
        onPress={handleLogin}
        style={styles.buttonFilled}
      >
        <Text style={styles.buttonFilledText}>Connecter</Text>
      </TouchableOpacity>

      {/* Lien Mot de passe oublié */}
      <TouchableOpacity>
        <Text style={styles.forgot}>Mot de passe oublié?</Text>
      </TouchableOpacity>

      {/* Connexion avec Facebook/Google */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.or}>Se connecter avec</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image source={{ uri: 'https://img.icons8.com/color/48/facebook-new.png' }} style={styles.iconSocial} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: 'https://img.icons8.com/color/48/google-logo.png' }} style={styles.iconSocial} />
        </TouchableOpacity>
      </View>

      {/* Lien inscription */}
      <Text style={styles.signupText}>
        Pas encore de compte ? <Text style={styles.signupLink} onPress={() => navigation.navigate('inscription')}>Inscrivez-vous</Text>
      </Text>
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
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#345C2A',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#9B8F5D',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: '#9B8F5D',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginVertical: 8,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#fff',
  },
  forgot: {
    alignSelf: 'flex-end',
    marginTop: 4,
    color: '#9B8F5D',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#345C2A',
  },
  or: {
    marginHorizontal: 10,
    color: '#345C2A',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
  },
  iconSocial: {
    width: 40,
    height: 40,
  },
  signupText: {
    textAlign: 'center',
    marginTop: 30,
    color: '#9B8F5D',
  },
  signupLink: {
    fontWeight: 'bold',
    color: '#9B8F5D',
  },
});
