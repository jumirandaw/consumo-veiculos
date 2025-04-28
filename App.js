// Importa as bibliotecas necessárias do React e React Navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa as telas da aplicação
import HomeScreen from './screens/HomeScreen';
import ResultScreen from './screens/ResultScreen';

// Cria o navegador de pilha
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // NavigationContainer gerencia a navegação entre as telas
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Tela inicial */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Tela de resultados */}
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
