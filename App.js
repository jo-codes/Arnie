import React from 'react';
import { StyleSheet, View } from 'react-native';
import Blink from './components/Blink';
import { ThemeProvider, Card, Header } from 'react-native-elements';

const theme = {
  Header: {
    backgroundColor: "#f7f7f7"
  }
}

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider theme={theme}>
        <View style={styles.header}>
          <Header
            leftComponent={{ icon: 'menu', color: '#0f0f0f' }}
            centerComponent={{ text: 'Arnie', style: { color: '#0f0f0f' } }}
            rightComponent={{ icon: 'home', color: '#0f0f0f' }}
          />
        </View>

        <View style={styles.bodyContainer}>
          <View>
            <Card title='Chest' />
          </View>

          <View>
            <Card title='Back' />
          </View>

          <View>
            <Card title='Arms' />
          </View>

          <View>
            <Card title='Legs' />
          </View>

          <View>
            <Card title='Shoulders' />
          </View>

          <View>
            <Card title='Acc. / Misc' />
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
  bodyContainer: {
    flex: 7
  }
});
