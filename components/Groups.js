import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Divider, Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import ExObj from '../ExObj';

class Groups extends React.Component {
  render() {
    const muscleGroups = [
      'Chest',
      'Back',
      'Arms',
      'Legs',
      'Shoulders',
      'Accessories'
    ];

    const icons = {
      chest: require('../images/muscleGroupIcons/chest.jpg'),
      back: require('../images/muscleGroupIcons/back.jpg'),
      arms: require('../images/muscleGroupIcons/arms.jpg'),
      legs: require('../images/muscleGroupIcons/legs.jpg'),
      shoulders: require('../images/muscleGroupIcons/shoulders.jpg'),
      accessories: require('../images/muscleGroupIcons/accessories.jpg')
    };

    var groups = Object.entries(ExObj).map(([type, exercise]) => {
      return type.toString();
    });

    var groupComponentArray = [];

    for (var i = 0; i < groups.length; i++) {
      const currentMuscle = groups[i];
      groupComponentArray.push(
        <View style={styles.list} key={i}>
          <ListItem
            style={styles.list}
            title={groups[i]}
            chevron={{ color: '#6b52ae' }}
            leftAvatar={{
              source: icons[groups[i].toLowerCase()]
            }}
            onPress={() => this.props.navigation.navigate('Equipment')}
          />
          <Divider />
        </View>
      );
    }

    return <View style={styles.list}>{groupComponentArray}</View>;
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default withNavigation(Groups);
