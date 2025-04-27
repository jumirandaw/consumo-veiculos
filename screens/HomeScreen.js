import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [km, setKm] = useState('');
  const [liters, setLiters] = useState('');

  const handleCalculate = () => {
    if (km && liters) {
      navigation.navigate('Result', {
        km: parseFloat(km),
        liters: parseFloat(liters),
      });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Consumo</Text>

      <TextInput
        style={styles.input}
        placeholder="Quilometragem (KM)"
        keyboardType="numeric"
        value={km}
        onChangeText={setKm}
      />

      <TextInput
        style={styles.input}
        placeholder="Litros Consumidos"
        keyboardType="numeric"
        value={liters}
        onChangeText={setLiters}
      />

      <Button title="Calcular" onPress={handleCalculate} />

      <Text style={styles.footer}>Gremio NÃO tem mundial</Text>
    </View>
  );
}

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
