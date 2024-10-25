import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Logo() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.questionMark}>?</Text>
      </View>
      <Text style={styles.appName}>Together</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30, // Add margin at the bottom to create spacing
  },
  card: {
    width: 60,
    height: 80,
    backgroundColor: '#2e6ddf',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '10deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  questionMark: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  appName: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e6ddf',
  },
});
 