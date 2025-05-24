import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './../screens/Home';
import accueil from '../screens/acceuil';
import traduction from '../screens/traduction';


const Routes = () => {
const Stack = createNativeStackNavigator();
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen name="home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="accueil" component={accueil} options={{headerShown: false}}/>
          <Stack.Screen name="traduction" component={traduction} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Routes
