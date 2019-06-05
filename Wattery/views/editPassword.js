import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, AsyncStorage } from 'react-native';
import BasicButton from '../components/button';

export default class EditPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: "",

      isPasswordInvalid: false,
      canSubmit: false
    };

    this.getLogin()

  }
  getLogin = async () => {
    try {
      const userToken = await AsyncStorage.getItem("userToken");
      const userToken1 = JSON.parse(userToken);
      this.setState({ login: userToken1.login });
    }
    catch (e) { }
  }

  setNewPassword = (text) => {
    const canSubmit = text.length > 2 ? true : false;
    this.setState({
      password: text,
      canSubmit
    })
  }
  setPassword = async () => {
    try {
      const userToken = await AsyncStorage.setItem("userToken", JSON.stringify({
        login: this.state.login,
        password: this.state.password
      }))
      this.props.navigation.push('Loader')
    }
    catch (e) { }
  }

  render() {
    return (
      <View>
        <Text style={styles.title}> <Text style={styles.title}>Login: </Text>{this.state.login}</Text>
        <TextInput
          style={[styles.inputContainer]}
          secureTextEntry
          placeholder='Nowe hasło'
          value={this.state.password}
          onChangeText={this.setNewPassword}
          returnKeyType='done'
          autoCapitalize='none'
        />
        {this.state.isPasswordInvalid
          && <Text style={styles.invalidPassword}>Hasło jest za krótkie</Text>}
        <BasicButton
          title="Set password"
          style={styles.loginButton}
          disabled={!this.state.canSubmit}
          onPress={this.setPassword}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 32,
    justifyContent: 'center'
  },
  loginButton: {
    marginTop: 16,
    backgroundColor: '#4E00B1'
  },
  inputContainer: {
    margin: 8,
    paddingHorizontal: 8,
    paddingVertical: 16,
    fontSize: 20
  },
  invalidPassword: {
    color: 'red'
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center'
  }
})
