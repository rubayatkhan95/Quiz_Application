import React, { Component } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button"
import { Actions } from "react-native-router-flux";
import AsyncStorage from "@react-native-community/async-storage";

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            validUsername: false,
            validEmail: false,
            validPassword: false,
            hasUsernameError: false,
            hasEmailError: false,
            hasPasswordError: false,
        };
    }


    onChangeUsername = (value) => {
        this.setState({ username: value })
        if (value.length > 3) {
            this.setState({ validUsername: true, hasUsernameError: false })
        } else {
            this.setState({ validUsername: false, hasUsernameError: true })
        }
    }
    onChangeEmail = (value) => {
        this.setState({ email: value })
        let expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (expression.test(value) === false) {
            this.setState({ validEmail: false, hasEmailError: true })
        } else {
            this.setState({ validEmail: true, hasEmailError: false })
        }
    }

    onChangePassword = (value) => {
        this.setState({ password: value })
        if (value.length > 7) {
            this.setState({ validPassword: true, hasPasswordError: false })
        }
        else {
            this.setState({ validPassword: false, hasPasswordError: true })
        }
    }

    onPressButton = async() => {
        if(this.state.validUsername == true && this.state.validEmail == true && this.state.validPassword== true){
            let user = {
                username :this.state.username,
                password:this.state.password,
                email:this.state.email
            }
            await AsyncStorage.setItem('user', JSON.stringify(user));
            Actions.Login({type:"replace"})
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginBottom: 15 }}>
                    <Input placeholder="Username" onChangeText={(value) => this.onChangeUsername(value)} />
                    {this.state.validUsername == false && this.state.hasUsernameError == true ? <Text style={{ marginLeft: 5, color: "red" }}>Invalid Username (at least 4 characters)</Text> : null}
                </View>
                <View style={{ marginBottom: 15 }}>
                    <Input placeholder="Email" onChangeText={(value) => this.onChangeEmail(value)} />
                    {this.state.validEmail == false && this.state.hasEmailError == true ? <Text style={{ marginLeft: 5, color: "red" }}>Invalid Email!</Text> : null}
                </View>
                <View style={{ marginBottom: 15 }}>
                    <Input placeholder="Password" onChangeText={(value) => this.onChangePassword(value)} />
                    {this.state.validPassword == false && this.state.hasPasswordError == true ? <Text style={{ marginLeft: 5, color: "red" }}>Invalid Username (at least 8 characters)</Text> : null}
                </View>
                <Button buttonTitle="Sign Up" onPress={() => this.onPressButton()} />
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
