import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

class Blink extends Component {
  render() {
    return (
      <View>
        <Button title='Now me!' />
      </View>
    );
  }
}

export default Blink;
