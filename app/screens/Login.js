import React, { Component } from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity, DeviceEventEmitter, ToastAndroid, BackHandler } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button"
import { Actions } from "react-native-router-flux";
import AsyncStorage from "@react-native-community/async-storage";
import { Image } from "react-native";
import { Keyboard } from "react-native";

var lastTime = 0, currentTime;

let BackPressed;

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    componentDidMount() {
        BackPressed = DeviceEventEmitter.addListener('hardwareBackPress', function (event) {
            this.handleBackButtonClick()
        }.bind(this));
    }

    componentWillUnmount() {
        if (typeof BackPressed !== "undefined") {
            BackPressed.remove()
        }
    }

    onChangeEmail = (value) => {
        this.setState({ email: value })
    }

    onChangePassword = (value) => {
        this.setState({ password: value })
    }

    onPressButton = async () => {
        Keyboard.dismiss()
        if (this.state.email != "" && this.state.password != "") {
            let user = await AsyncStorage.getItem("user");
            let userObject = JSON.parse(user)
            if (typeof userObject !== "undefined" && userObject !== null && this.state.email == userObject.email && this.state.password == userObject.password) {
                await AsyncStorage.setItem('alreadyLoggedIn', "true");
                Actions.Home({ type: "replace", username: userObject.username })
            }
            else {
                ToastAndroid.showWithGravityAndOffset(
                    "User is not Registered!",
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                    25,
                    50,
                );
            }
        } else {
            if (this.state.email == "" && this.state.password != "") {
                ToastAndroid.showWithGravityAndOffset(
                    "Enter Email Address",
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                    25,
                    50,
                );
            } else if (this.state.email != "" && this.state.password == "") {
                ToastAndroid.showWithGravityAndOffset(
                    "Enter Your Password",
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                    25,
                    50,
                )
            } else {
                ToastAndroid.showWithGravityAndOffset(
                    "Enter Email & Password",
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                    25,
                    50,
                )
            }

        }
    }

    onPressSeeAvailableQuiz = () => {
        Actions.AvailableQuizes()
    }


    handleBackButtonClick() {
        if (Actions.currentScene == "Authentication" || Actions.currentScene == "Login") {
            currentTime = new Date().getTime();
            if (currentTime - lastTime < 5000) {
                BackHandler.exitApp();
            } else {
                lastTime = currentTime;
                ToastAndroid.showWithGravityAndOffset(
                    "Want to Exit App ?",
                    ToastAndroid.SHORT,
                    ToastAndroid.BOTTOM,
                    25,
                    50,
                );
            }
        }
        return true;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginBottom: 40, height: 150, width: 150, borderRadius: 75 }}>
                    <Image source={require("../assets/logo.png")} style={{ height: 150, width: 150, borderRadius: 75 }} />
                </View>
                <View style={{ marginBottom: 15 }}>
                    <Input placeholder="Email" onChangeText={(value) => this.onChangeEmail(value)} />
                </View>
                <View style={{ marginBottom: 15 }}>
                    <Input placeholder="Password" onChangeText={(value) => this.onChangePassword(value)} secureTextEntry ={true}/>
                </View>
                <Button buttonTitle="Login" onPress={() => this.onPressButton()} />
                <Button
                    customStyle={{ backgroundColor: "#F5FCFF", borderWidth: 1, borderColor: "#841584", marginTop: 10 }}
                    buttonTitle="See Availble Quizes"
                    buttonTextStyle={{ color: "#841584" }}
                    onPress={() => this.onPressSeeAvailableQuiz()}
                />
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
