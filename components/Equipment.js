import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Divider, Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import ExObj from '../ExObj';

class EquipmentMenu extends React.Component {
  render() {
    const icons = {
      dumbbell: require('../images/equipmentIcons/dumbbell.png'),
      barbell: require('../images/equipmentIcons/barbell.png'),
      smith: require('../images/equipmentIcons/smith.png'),
      cables: require('../images/equipmentIcons/cables.png'),
      machine: require('../images/equipmentIcons/machine.png')
    };

    const exercises = Object.entries(ExObj).map(([group, equip]) => {
      return <Text key={Math.random()}>{equip.toString()}</Text>;
    });

    return (
      <View style={styles.list}>
        <Text>{exercises}</Text>
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

export default withNavigation(EquipmentMenu);
