import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {
  componentDidMount() {
    // Toggle the state every second
    setInterval(
      () =>
        this.setState(previousState => ({
          isShowingText: !previousState.isShowingText
        })),
      1000
    );
  }

  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }
    return <Text>{this.props.text}</Text>;
  }
}

export default Blink;