import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { ThemeProvider, withTheme } from 'react-native-elements';
import Groups from './components/Groups';
import EquipmentMenu from './components/Equipment';
import EquipDetails from './components/EquipDetails'
import theme from './components/componentThemes/MainTheme';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitleStyle: { textAlign: 'center', flex: 1 },
    title: 'Home'
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ThemeProvider theme={theme}>
          <Groups />
        </ThemeProvider>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Equipment: EquipmentMenu,
    EquipDetailScreen: EquipDetails 
  },
  {
    initialRouteName: 'Home',
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

export default createAppContainer(withTheme(AppNavigator));
