import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Welcome from './components/welcome';
import SignIn from './components/signIn'

const AppNavigator = createStackNavigator(
  {
    Welcome: Welcome,
    SignIn: SignIn
  },
  {
    initialRouteName: "Welcome",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AppContainer/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1
  },
});
