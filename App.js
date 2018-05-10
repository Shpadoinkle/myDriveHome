import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { data } from './src/data/data';

export default class App extends React.Component {
  state = {
    list: []
  };

  componentWillMount() {
    this.setState({ list: [...data] });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Test App.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
