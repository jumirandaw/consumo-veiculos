import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { km, liters } = route.params;
  const average = (km / liters).toFixed(2);

  const getClassification = () => {
    if (average > 12) return 'A';
    if (average <= 12 && average > 10) return 'B';
    if (average <= 10 && average > 8) return 'C';
    if (average <= 8 && average > 4) return 'D';
    return 'E';
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Resultado</Text>

      <Text style={styles.result}>
        Você percorreu {km} Km e consumiu {liters} litros.
      </Text>

      <Text style={styles.result}>
        Sua média foi: <Text style={styles.highlight}>{average} Km/L</Text>
      </Text>

      <Text style={styles.classification}>
        Classificação: <Text style={styles.highlight}>{getClassification()}</Text>
      </Text>

      {/* Aqui começa a tabela de classificação */}
      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>Tabela de Classificação:</Text>
        
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>A</Text>
          <Text style={styles.tableCell}>Mais de 12 Km/L</Text>
        </View>
        
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>B</Text>
          <Text style={styles.tableCell}>Até 12 Km/L</Text>
        </View>
        
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>C</Text>
          <Text style={styles.tableCell}>Até 10 Km/L</Text>
        </View>
        
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>D</Text>
          <Text style={styles.tableCell}>Até 8 Km/L</Text>
        </View>
        
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>E</Text>
          <Text style={styles.tableCell}>Até 4 Km/L</Text>
        </View>
      </View>
      
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  classification: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  highlight: {
    color: '#2e86de',
    fontWeight: 'bold',
  },
  tableContainer: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  tableCell: {
    fontSize: 16,
  },
});
