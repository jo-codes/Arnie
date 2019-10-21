import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

const icons = {
  chest: require('../images/muscleGroupIcons/chest.jpg'),
  back: require('../images/muscleGroupIcons/back.jpg'),
  arms: require('../images/muscleGroupIcons/arms.jpg'),
  legs: require('../images/muscleGroupIcons/legs.jpg'),
  shoulders: require('../images/muscleGroupIcons/shoulders.jpg'),
  accessories: require('../images/muscleGroupIcons/accessories.jpg')
};

class ChestMenu extends React.Component {
  static navigationOptions = {
    title: 'Chest',
    headerTitleStyle: { textAlign: 'center', flex: 1 },
    headerRight: <View />
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ListItem
          style={styles.list}
          title='Chest'
          leftAvatar={{
            source: icons['chest']
          }}
          chevron={{ color: '#6b52ae' }}
        />

        <Divider />
      </View>
    );
  }
}

class BackMenu extends React.Component {
  static navigationOptions = {
    title: 'Back',
    headerTitleStyle: { textAlign: 'center', flex: 1 },
    headerRight: <View />
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ListItem
          style={styles.list}
          title='Back'
          leftAvatar={{
            source: icons['back']
          }}
          chevron={{ color: '#6b52ae' }}
        />

        <Divider />
      </View>
    );
  }
}

class ArmsMenu extends React.Component {
  static navigationOptions = {
    title: 'Arms',
    headerTitleStyle: { textAlign: 'center', flex: 1 },
    headerRight: <View />
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ListItem
          style={styles.list}
          title='Arms'
          leftAvatar={{
            source: icons['arms']
          }}
          chevron={{ color: '#6b52ae' }}
        />

        <Divider />
      </View>
    );
  }
}

class LegsMenu extends React.Component {
  static navigationOptions = {
    title: 'Legs',
    headerTitleStyle: { textAlign: 'center', flex: 1 },
    headerRight: <View />
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ListItem
          style={styles.list}
          title='Legs'
          leftAvatar={{
            source: icons['legs']
          }}
          chevron={{ color: '#6b52ae' }}
        />

        <Divider />
      </View>
    );
  }
}

class ShouldersMenu extends React.Component {
  static navigationOptions = {
    title: 'Shoulders',
    headerTitleStyle: { textAlign: 'center', flex: 1 },
    headerRight: <View />
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ListItem
          style={styles.list}
          title='Shoulders'
          leftAvatar={{
            source: icons['shoulders']
          }}
          chevron={{ color: '#6b52ae' }}
        />

        <Divider />
      </View>
    );
  }
}

class AccessoriesMenu extends React.Component {
  static navigationOptions = {
    title: 'Accessories',
    headerTitleStyle: { textAlign: 'center', flex: 1 },
    headerRight: <View />
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ListItem
          style={styles.list}
          title='Accessories'
          leftAvatar={{
            source: icons['accessories']
          }}
          chevron={{ color: '#6b52ae' }}
        />

        <Divider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export {
  ChestMenu,
  BackMenu,
  ArmsMenu,
  LegsMenu,
  ShouldersMenu,
  AccessoriesMenu
};
