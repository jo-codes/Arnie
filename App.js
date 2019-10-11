import React from 'react';
import { StyleSheet, View } from 'react-native';
import Blink from './components/Blink';
import { ThemeProvider, Button, Text } from 'react-native-elements';

const theme = {
  Button: {
    icon: {
      type: 'evilicon',
      name: 'sc-telegram'
    }
  }
};

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme}>
        <View style={styles.view1}>
          <Button title='Click me!' />
        </View>

        <View style={styles.blink}>
          <Blink />
        </View>
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  view1: {
    flex: 1,
    justifyContent: 'center'
  },
  blink: {
    flex: 1,
    justifyContent: 'center'
  }
});
