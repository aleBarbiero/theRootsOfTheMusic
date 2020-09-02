import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import Lista from './pages/Lista';
import Categorie from './pages/Categorie';
import Scalette from './pages/Scalette';
import Canzone from './pages/Canzone';
import Scaletta from './pages/Scaletta';
import {ElementProvider} from './context';

const Stack = createStackNavigator();

console.disableYellowBox = true;

function NavStack() {
  return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#222',
            height: 100
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontSize: 25,
            fontFamily: "Roboto"
          }
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
          name="Canzoni" 
          component={Lista} 
          options={{ title: 'Cerca una canzone' }}
        />
        <Stack.Screen
          name="Categorie"
          component={Categorie}
          options={{title:"Lista categorie"}}
        ></Stack.Screen>
        <Stack.Screen
          name="Canzone"
          component={Canzone}
        ></Stack.Screen>
        <Stack.Screen
          name="Scaletta"
          component={Scaletta}
        ></Stack.Screen>
      </Stack.Navigator>
  )
}

export default function App() {
  return ( 
    <ElementProvider>
      <NavigationContainer>
        <NavStack></NavStack>
      </NavigationContainer>
    </ElementProvider>
  );
}