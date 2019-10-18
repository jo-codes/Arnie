import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

class Blink extends Component {
  render() {
    return (
      <View style={styles.groups}>
        <View>
          <Card title='Chest' />
        </View>

        <View>
          <Card title='Back' />
        </View>

        <View>
          <Card title='Arms' />
        </View>

        <View>
          <Card title='Legs' />
        </View>

        <View>
          <Card title='Shoulders' />
        </View>

        <View>
          <Card title='Acc. / Misc' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  groups: {
    flex: 7
  }
});

export default Blink;
