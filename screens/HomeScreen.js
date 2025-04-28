// Importa bibliotecas do React e componentes do React Native
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  // Estados para armazenar os valores digitados pelo usuário
  const [km, setKm] = useState('');
  const [liters, setLiters] = useState('');

  // Função que trata o clique no botão de calcular
  const handleCalculate = () => {
    // Verifica se ambos os campos foram preenchidos
    if (km && liters) {
      // Navega para a tela de resultados, passando os valores como parâmetros
      navigation.navigate('Result', {
        km: parseFloat(km),
        liters: parseFloat(liters),
      });
    } else {
      // Alerta o usuário caso algum campo esteja vazio
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Consumo</Text>

      {/* Campo de entrada para a quilometragem */}
      <TextInput
        style={styles.input}
        placeholder="Quilometragem (KM)"
        keyboardType="numeric"
        value={km}
        onChangeText={setKm}
      />

      {/* Campo de entrada para litros consumidos */}
      <TextInput
        style={styles.input}
        placeholder="Litros Consumidos"
        keyboardType="numeric"
        value={liters}
        onChangeText={setLiters}
      />

      {/* Botão que dispara o cálculo */}
      <Button title="Calcular" onPress={handleCalculate} />

      {/* Mensagem obrigatória no rodapé */}
      <Text style={styles.footer}>O Grêmio NÃO tem mundial</Text>
    </View>
  );
}

// Estilos da tela inicial
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  footer: {
    marginTop: 30,
    textAlign: 'center',
    color: 'gray',
  },
});
