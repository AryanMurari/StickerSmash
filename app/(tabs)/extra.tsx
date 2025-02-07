import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
  },
  box1: {
    flex: 1,
    backgroundColor: 'red',
  },
  box2: {
    flex: 2,
    backgroundColor: 'blue',
  },
  box3: {
    flex: 3,
    backgroundColor: 'green',
  },
});
