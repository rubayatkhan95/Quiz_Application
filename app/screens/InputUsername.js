import React, { Component } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button"
import AsyncStorage from "@react-native-community/async-storage";
import { Actions } from "react-native-router-flux";

export default class InputUsername extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNumber: "",
            username: "",
            validUsername: false,
            hasUsernameError: false
        };
    }

    async componentDidMount() {
        let user = await AsyncStorage.getItem("user");
        let userObject = JSON.parse(user)
        this.setState({ username: userObject.username })

    }
    onPressButton = async () => {
        await AsyncStorage.setItem('newUser', JSON.stringify(this.state.username));
        let alreadyLoggedIn = await AsyncStorage.getItem("alreadyLoggedIn");
        if(alreadyLoggedIn == "true"){
            setTimeout(() => {
                Actions.Home({ type: "replace" })
            }, 1000);
        } else {
            setTimeout(() => {
                Actions.reset("Login")
            }, 1000);
           
        }
    }

    onChangeName = (value) => {
        this.setState({ username: value })
        if (value.length > 3) {
            this.setState({ validUsername: true, hasUsernameError: false })
        } else {
            this.setState({ validUsername: false, hasUsernameError: true })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 20, color: "#841584" }}>Enter Your Name </Text>
                <View style={{ marginTop: 15 }}>
                    <Input placeholder="Name" onChangeText={(value) => this.onChangeName(value)} />
                    {this.state.validUsername == false && this.state.hasUsernameError == true ? <Text style={{ marginLeft: 5, color: "red" }}>Invalid Name (at least 4 characters)</Text> : null}
                </View>
                <View style={{ marginTop: 20 }}>
                    <Button buttonTitle="Continue" onPress={() => this.onPressButton()} />
                </View>
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
