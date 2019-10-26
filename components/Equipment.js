import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Divider, Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import ExObj from '../ExObj';

class EquipmentMenu extends React.Component {
  render() {
    const { params } = this.props.navigation.state;

    const icons = {
      dumbbell: require('../images/equipmentIcons/dumbbell.jpg'),
      barbell: require('../images/equipmentIcons/barbell.jpg'),
      smith: require('../images/equipmentIcons/smith.jpg'),
      cables: require('../images/equipmentIcons/cables.jpg'),
      machine: require('../images/equipmentIcons/machine.jpg')
    };

    const equipToMap = params.muscleGroup;

    const tempEquipment = Object.entries(ExObj[equipToMap]).map(
      ([type, exercise]) => {
        return type.toString();
      }
    );

    equipment = [];

    for (var i = 0; i < tempEquipment.length; i++) {
      const currentEquip = tempEquipment[i];
      equipment.push(
        <View style={styles.list} key={i}>
          <ListItem
            style={styles.list}
            title={tempEquipment[i]}
            chevron={{ color: '#6b52ae' }}
            leftAvatar={{
              source: icons[tempEquipment[i].toLowerCase()]
            }}
          />
          <Divider />
        </View>
      );
    }

    return <View style={styles.list}>{equipment}</View>;
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
