import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Dialog from "react-native-dialog";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 40,
      dialogVisible: false,
    };
  }

  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  handleAddDrink = (type) => {
     const isUnSafeDrink = type === 'alcohol';
    const newPercentageValue = (isUnSafeDrink ? -20 : 20) + +this.state.percentage;

    this.setState({ 
      percentage: newPercentageValue,
      dialogVisible: false 
    });
  };

  handleDelete = () => {
    this.setState({ dialogVisible: false });
  };

  render() {
    const { percentage } = this.state;

    return (
      <View style={styles.container}>
        <Text>Your daily water routine</Text>
        <Text style={styles.title}>{percentage}%</Text>
        <TouchableOpacity style={styles.waterContainer}
        onPress={() => {
            this.showDialog();
          }}>
          <LinearGradient colors={['#0B5BD3', '#FFF']} style={{flex: 1}}>
            <View style={[styles.waterPortion, percentage < 100 && styles.emptyPortion]}></View>
            <View style={[styles.waterPortion, percentage < 80 && styles.emptyPortion]}></View>
            <View style={[styles.waterPortion, percentage < 60 && styles.emptyPortion]}></View>
            <View style={[styles.waterPortion, percentage < 40 && styles.emptyPortion]}></View>
            <View style={[styles.waterPortion, percentage < 20 && styles.emptyPortion]}></View>
          </LinearGradient>
        </TouchableOpacity>
        <Dialog.Container visible={this.state.dialogVisible} onBackdropPress={() => this.setState({dialogVisible: false})}>
          <Dialog.Title>Select drink type</Dialog.Title>
          <Dialog.Description>
            What did you drink?
          </Dialog.Description>
          <Dialog.Button label="A glass of pure Water" onPress={() => this.handleAddDrink('water')} />
          <Dialog.Button label="Drink with Sugar" onPress={() => this.handleAddDrink('water')} />
          <Dialog.Button label="Alcohol" onPress={() => this.handleAddDrink('alcohol')} />
        </Dialog.Container>
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
    borderWidth: 4,
  },
  waterPortion: {
    borderWidth: 1,
    flex: 1,
  },
  emptyPortion: {
    backgroundColor: 'white',
  }
})
