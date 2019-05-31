import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0
    };
  }

  render() {
    const { percentage } = this.state;

    return (
      <View style={styles.container}>
        <Text>Your daily water routine</Text>
        <Text style={styles.title}>{percentage}%</Text>
        <View style={styles.waterContainer}>
          <View style={styles.waterPortion}></View>
          <View style={styles.waterPortion}></View>
          <View style={styles.waterPortion}></View>
          <View style={styles.waterPortion}></View>
          <View style={styles.waterPortion}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
    color: '#007AFF',
    padding: 32,
  },
  waterContainer: {
    flex: 1,
    height: '80%',
    width: '80%',
    backgroundColor: 'red',
    borderWidth: 4,
  },
  waterPortion: {
    borderWidth: 1,
    flex: 1
  }
})
