import React, { Component } from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button"
import { Actions } from "react-native-router-flux";
import AsyncStorage from "@react-native-community/async-storage";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    componentDidMount() {

    }

    onChangeEmail = (value) => {
        this.setState({ email: value })
    }

    onChangePassword = (value) => {
        this.setState({ password: value })
    }
    onPressButton = async () => {
        let user = await AsyncStorage.getItem("user");
        let userObject = JSON.parse(user)
        if (this.state.email == userObject.email && this.state.password == userObject.password) {
            await AsyncStorage.setItem('alreadyLoggedIn', "true");
            Actions.Home({ type: "replace", username: userObject.username })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginBottom: 15 }}>
                    <Input placeholder="Email" onChangeText={(value) => this.onChangeEmail(value)} />
                </View>
                <View style={{ marginBottom: 15 }}>
                    <Input placeholder="Password" onChangeText={(value) => this.onChangePassword(value)} />
                </View>
                <Button buttonTitle="Login" onPress={() => this.onPressButton()} />

                <TouchableOpacity style={{ marginTop: 20 }} onPress={() => { Actions.Registration() }}>
                    <Text style={{ color: "green" }}>Want to Register as Admin ?</Text>
                </TouchableOpacity>
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
