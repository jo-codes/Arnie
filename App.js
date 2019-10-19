import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  ThemeProvider,
  Text,
  Button,
  ListItem,
  Divider
} from 'react-native-elements';

theme = {};

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitleStyle: { textAlign: 'center', flex: 1 },
    title: 'Home'
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ThemeProvider theme={theme}>
          <ListItem
            style={styles.list}
            title='Chest'
            leftAvatar={{
              source: require('./images/muscleGroupIcons/chest.jpg')
            }}
            chevron={{ color: '#6b52ae' }}
          />

          <Divider
            style={{ alignSelf: 'stretch', backgroundColor: '#6b52ae' }}
          />

          <ListItem
            style={styles.list}
            title='Back'
            leftAvatar={{
              source: require('./images/muscleGroupIcons/back.jpg')
            }}
            chevron={{ color: '#6b52ae' }}
          />

          <Divider
            style={{ alignSelf: 'stretch', backgroundColor: '#6b52ae' }}
          />

          <ListItem
            style={styles.list}
            title='Arms'
            leftAvatar={{
              source: require('./images/muscleGroupIcons/arms.jpg')
            }}
            chevron={{ color: '#6b52ae' }}
          />

          <Divider
            style={{ alignSelf: 'stretch', backgroundColor: '#6b52ae' }}
          />

          <ListItem
            style={styles.list}
            title='Legs'
            leftAvatar={{
              source: require('./images/muscleGroupIcons/legs.jpg')
            }}
            chevron={{ color: '#6b52ae' }}
          />

          <Divider
            style={{ alignSelf: 'stretch', backgroundColor: '#6b52ae' }}
          />

          <ListItem
            style={styles.list}
            title='Shoulders'
            leftAvatar={{
              source: require('./images/muscleGroupIcons/shoulders.jpg')
            }}
            chevron={{ color: '#6b52ae' }}
          />

          <Divider
            style={{ alignSelf: 'stretch', backgroundColor: '#6b52ae' }}
          />

          <ListItem
            style={styles.list}
            title='Accessories'
            leftAvatar={{
              source: require('./images/muscleGroupIcons/accessories.jpg')
            }}
            chevron={{ color: '#6b52ae' }}
          />

          <Divider
            style={{ alignSelf: 'stretch', backgroundColor: '#6b52ae' }}
          />
        </ThemeProvider>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Details'
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#6b52ae'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default createAppContainer(AppNavigator);
