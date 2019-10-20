import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

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
      chest: require('../images/icons/chest.jpg'),
      back: require('../images/icons/back.jpg'),
      arms: require('../images/icons/arms.jpg'),
      legs: require('../images/icons/legs.jpg'),
      shoulders: require('../images/icons/shoulders.jpg'),
      accessories: require('../images/icons/accessories.jpg')
    };

    var groups = [];

    for (var i = 0; i < muscleGroups.length; i++) {
      const currentMuscle = muscleGroups[i];
      groups.push(
        <View style={styles.list} key={i}>
          <ListItem
            style={styles.list}
            title={muscleGroups[i]}
            chevron={{ color: '#6b52ae' }}
            leftAvatar={{
              source: icons[muscleGroups[i].toLowerCase()]
            }}
            onPress={() => this.props.navigation.navigate(currentMuscle)}
          />
          <Divider />
        </View>
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

export default withNavigation(Groups);
