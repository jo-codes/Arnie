import React from 'react';
import { StyleSheet, View } from 'react-native';
import Blink from './components/Blink';
import {
  ThemeProvider,
  Card,
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
  Card: {
    height: 165,
    width: 165
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

        <View style={styles.bodyCardContainer}>
          <View>
            <Card
              containerStyle={{ backgroundColor: '#95efde' }}
              title='Chest'
            />
          </View>

          <View>
            <Card
              containerStyle={{ backgroundColor: '#fbd4ab' }}
              title='Back'
            />
          </View>

          <View>
            <Card
              containerStyle={{ backgroundColor: '#e4b1e4' }}
              title='Arms'
            />
          </View>

          <View>
            <Card
              containerStyle={{ backgroundColor: '#aedaf5' }}
              title='Legs'
            />
          </View>

          <View>
            <Card
              containerStyle={{ backgroundColor: '#f4b4b0' }}
              title='Shoulders'
            />
          </View>
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
  header: {
    flex: 1,
    alignSelf: 'stretch'
  },
  bodyCardContainer: {
    flex: 7,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    alignContent: 'stretch',
    justifyContent: 'center',
  }
});
