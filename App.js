import React from 'react';
import { StyleSheet, View } from 'react-native';
import Blink from './components/Blink';
import {
  ThemeProvider,
  Tile,
  Button,
  Text,
  Header
} from 'react-native-elements';

const theme = {
  Button: {
    icon: {
      type: 'evilicon',
      name: 'sc-telegram'
    }
  },
  Tile: {
    height: 50,
    width: 50
  }
};

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme}>
        <View style={styles.header}>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Arnie', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
        </View>

        <View style={styles.bodyPartTile}>
          <Tile featured caption='Chesticles' />
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
  bodyPartTile: {
    flex: 1
  },
  blink: {
    flex: 1
  },
  header: {
    flex: 1,
    alignSelf: 'stretch'
  }
});
