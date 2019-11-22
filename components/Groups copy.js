import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeProvider, ListItem, Divider } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { exercises, icons } from '../ExObj';
import theme from './componentThemes/MainTheme';

class Groups extends React.Component {
  render() {
    var groups = Object.entries(exercises).map(([type, exercise]) => {
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
              source: icons.muscleGroups[groups[i].toLowerCase()] 
            }}
            onPress={() =>
              this.props.navigation.navigate('Equipment', {
                muscleGroup: currentMuscle
              })
            }
          />
          <Divider />
        </View>
      );
    }

    return (
      <ThemeProvider theme={theme}>
        <View style={styles.list}>{groupComponentArray}</View>
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

export default withNavigation(Groups);
