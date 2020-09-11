import React, { Component } from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button"
import { Actions } from "react-native-router-flux";
import AsyncStorage from "@react-native-community/async-storage";

export default class Authentication extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount () {
        let alreadyLoggedIn = await AsyncStorage.getItem("alreadyLoggedIn");
        if(alreadyLoggedIn == "true"){
            Actions.Home()
        } else {
            Actions.Login()
        }

    }
   
    render() {
        return (
            <View style={styles.container}>
              
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 28,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
