import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import Welcome from './components/welcome';
import SignIn from './components/signIn'

export default class App extends Component {
  state = {
    page: 0
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.page === 0 ? 
          <Welcome nextPage={() => this.setState({page: 1})} /> : 
          <SignIn />
        }
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});
