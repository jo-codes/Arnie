import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeProvider, ListItem, Divider, Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { exercises, icons } from '../ExObj';
import theme from './componentThemes/MainTheme';

class EquipDetails extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    const currentGroup = params.currentGroup.toString();

    const groupToLoop = currentGroup.split(',');

    const groupToPush = [];

    for (var i = 0; i < groupToLoop.length; i++) {
      groupToPush.push(
        <View style={styles.list} key={i}>
          <ListItem
            style={styles.list}
            title={groupToLoop[i].toString()}
            chevron={{ color: '#6b52ae' }}
          />
          <Divider />
        </View>
      );
    }

    // const chestMap = Object.keys(exercises.Groups.Chest.ExType);
    // const backMap = Object.keys(exercises.Groups.Back.ExType);
    // const shoulderMap = Object.keys(exercises.Groups.Shoulders.Equipment);
    // const legMap = Object.keys(exercises.Groups.Legs.Part);
    // const accMap = Object.keys(exercises.Groups.Accessories.Part);
    // const hipsterMap = exercises.Groups.Hipsterflexers;
    // const armMap = Object.keys(exercises.Groups.Arms.Part);

    // var equipToLoop = [];

    // if (params.muscleGroup === 'Chest') {
    //   equipToLoop = chestMap;
    // } else if (params.muscleGroup === 'Back') {
    //   equipToLoop = backMap;
    // } else if (params.muscleGroup === 'Arms') {
    //   equipToLoop = armMap;
    // } else if (params.muscleGroup === 'Legs') {
    //   equipToLoop = legMap;
    // } else if (params.muscleGroup === 'Accessories') {
    //   equipToLoop = accMap;
    // } else if (params.muscleGroup === 'Shoulders') {
    //   equipToLoop = shoulderMap;
    // } else if (params.muscleGroup === 'Hipsterflexers') {
    //   equipToLoop = hipsterMap;
    // } else {
    //   equipToLoop = 'You found a bug, please report';
    // }

    // equipToLoop = equipToLoop.toString().split(',');

    return (
      <ThemeProvider theme={theme}>
        <View style={styles.list}>{groupToPush}</View>
      </ThemeProvider>
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

export default withNavigation(EquipDetails);
