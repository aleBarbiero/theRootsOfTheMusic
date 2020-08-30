import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import Lista from './pages/Lista';
import Categorie from './pages/Categorie';
import Scalette from './pages/Scalette';
import {ElementProvider} from './context';

const Stack = createStackNavigator();

function NavStack() {
  return (
    //<ElementProvider>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#222',
            height: 100
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'The roots of the music' }}
        />
        <Stack.Screen 
          name="Scalette" 
          component={Scalette} 
          options={{ title: 'Scalette' }}
        />
        <Stack.Screen 
          name="Lista canzoni" 
          component={Lista} 
          options={{ title: 'Lista canzoni' }}
        />
        <Stack.Screen
          name="Categorie"
          component={Categorie}
          options={{title:"Categorie"}}
        ></Stack.Screen>
      </Stack.Navigator>
    //</ElementProvider>
  )
}

export default function App() {
  return ( 
    <NavigationContainer>
      <NavStack></NavStack>
    </NavigationContainer>
  );
}