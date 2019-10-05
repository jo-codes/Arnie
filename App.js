import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Blink from './components/Blink';

export default function App() {
  return (
    <View style={styles.container}>
      <Blink text='what what?' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
