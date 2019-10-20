import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ListItem, Divider, Text } from 'react-native-elements';

class ChestMenu extends React.Component {
  static navigationOptions = {
    title: 'Chest',
    headerTitleStyle: { textAlign: 'center', flex: 1 }
  };

  render() {
    const muscleGroups = [
      'chest',
      'back',
      'arms',
      'legs',
      'shoulders',
      'accessories'
    ];

    const icons = {
      chest: require('../images/icons/chest.jpg'),
      back: require('../images/icons/back.jpg'),
      arms: require('../images/icons/arms.jpg'),
      legs: require('../images/icons/legs.jpg'),
      shoulders: require('../images/icons/shoulders.jpg'),
      accessories: require('../images/icons/accessories.jpg')
    };

    var groups = [];

    for (var i = 0; i < muscleGroups.length; i++) {
      groups.push(
        <ListItem
          key={i}
          style={styles.list}
          title={
            muscleGroups[i].charAt(0).toUpperCase() + muscleGroups[i].slice(1)
          }
          chevron={{ color: '#6b52ae' }}
          leftAvatar={{
            source: icons[muscleGroups[i]]
          }}
        />
      );
    }

    return <View style={styles.list}>{groups}</View>;
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ChestMenu;
