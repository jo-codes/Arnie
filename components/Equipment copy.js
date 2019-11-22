import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeProvider, ListItem, Divider } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { exercises, icons } from '../ExObj';
import theme from './componentThemes/MainTheme';

class EquipmentMenu extends React.Component {
  render() {
    const { params } = this.props.navigation.state;

    const equipToMap = params.muscleGroup;

    const tempEquipment = Object.entries(exercises[equipToMap]).map(
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
              source: icons.exEquipment[tempEquipment[i].toLowerCase()]
            }}
          />
          <Divider />
        </View>
      );
    }

    return (
      <ThemeProvider theme={theme}>
        <View style={styles.list}>{equipment}</View>
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

export default withNavigation(EquipmentMenu);