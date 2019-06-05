import { View, Text, ActivityIndicator, AsyncStorage, StyleSheet } from 'react-native';
import React, { Component } from 'react';

export default class Loader extends Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {

        setTimeout(() => {
            this.props.navigation.push('SignIn')
        }, 2000)


        getUserData = async () => {
            try {
                const userToken = await AsyncStorage.getItem("userToken");
            }
            catch (e) { }
        }
        getUserData();
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator size="large" /></View>
        )
    }
}
/* const styles = StyleSheet.create({
    ActivityIndicatorHidden: {
        visibility: hidden;
    },
    ActivityIndicatorVisible: {
        visibility: visible;
    },
}); */
/* setLogin = async () =>{
    try await AsyncStorage.setItem('data', "jakis mój tekst");
} */
