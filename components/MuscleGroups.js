import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Divider } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class MuscleGroups extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ListItem
          style={styles.list}
          title='Chest'
          leftAvatar={{
            source: require('../images/muscleGroupIcons/chest.jpg')
          }}
          chevron={{ color: '#6b52ae' }}
          onPress={() => this.props.navigation.navigate('Chest')}
        />

        <Divider />

        <ListItem
          style={styles.list}
          title='Back'
          leftAvatar={{
            source: require('../images/muscleGroupIcons/back.jpg')
          }}
          chevron={{ color: '#6b52ae' }}
        />

        <Divider />

        <ListItem
          style={styles.list}
          title='Arms'
          leftAvatar={{
            source: require('../images/muscleGroupIcons/arms.jpg')
          }}
          chevron={{ color: '#6b52ae' }}
        />

        <Divider />

        <ListItem
          style={styles.list}
          title='Legs'
          leftAvatar={{
            source: require('../images/muscleGroupIcons/legs.jpg')
          }}
          chevron={{ color: '#6b52ae' }}
        />

        <Divider />

        <ListItem
          style={styles.list}
          title='Shoulders'
          leftAvatar={{
            source: require('../images/muscleGroupIcons/shoulders.jpg')
          }}
          chevron={{ color: '#6b52ae' }}
        />

        <Divider />

        <ListItem
          style={styles.list}
          title='Accessories'
          leftAvatar={{
            source: require('../images/muscleGroupIcons/accessories.jpg')
          }}
          chevron={{ color: '#6b52ae' }}
        />
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

export default withNavigation(MuscleGroups);
