import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { ThemeProvider, Text, Button, ListItem } from 'react-native-elements';

theme = {
  Button: {
    buttonStyle: {
      backgroundColor: '#6b52ae'
    }
  }
};

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ThemeProvider theme={theme}>
          {/* <Image
            style={{ width: 50, height: 50 }}
            source={require('./images/muscleGroupIcons/chest.png')}
          />

          <Text>Home Screen</Text>
          <Button
            title='Go to Details'
            onPress={() => this.props.navigation.navigate('Details')}
          /> */}

          <ListItem style={styles.list} title="Chest" leftAvatar={{source: require('./images/muscleGroupIcons/chest.png')}} bottomDivider />
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
