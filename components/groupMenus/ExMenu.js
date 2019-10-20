import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

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
            source: require('../../images/icons/chest.jpg')
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
            source: require('../../images/icons/back.jpg')
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
            source: require('../../images/icons/arms.jpg')
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
            source: require('../../images/icons/legs.jpg')
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
            source: require('../../images/icons/shoulders.jpg')
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
            source: require('../../images/icons/accessories.jpg')
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
