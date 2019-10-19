import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';

class ChestMenu extends React.Component {
  static navigationOptions = {
    title: 'Chest',
    headerTitleStyle: { textAlign: 'center', flex: 1 }
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ListItem
          style={styles.list}
          title='Chest bruh'
          leftAvatar={{
            source: require('../../images/muscleGroupIcons/chest.jpg')
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

export default ChestMenu;
