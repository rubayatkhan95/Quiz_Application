import React, { Component } from "react";
import { View, StyleSheet, TextInput, Text, DeviceEventEmitter, ToastAndroid, BackHandler, Image } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button"
import AsyncStorage from "@react-native-community/async-storage";
import { Actions } from "react-native-router-flux";
var lastTime = 0, currentTime;

let BackPressed, HomePressed;
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNumber: "",
            username: ""
        };
    }

    async componentDidMount() {
        let user = await AsyncStorage.getItem("user");
        let userObject = JSON.parse(user)
        this.setState({ username: userObject.username })
        BackPressed = DeviceEventEmitter.addListener('BackPressed', function (event) {
            this.handleBackButtonClick()
        }.bind(this));

    }

    handleBackButtonClick() {
        console.warn(Actions.currentScene)
        if (Actions.currentScene == "Home") {
            if (Actions.state.routes[0].isDrawerOpen == true) {
                Actions.drawerClose();
            } else {
                currentTime = new Date().getTime();
                if (currentTime - lastTime < 3000) {
                    BackHandler.exitApp();
                } else {
                    lastTime = currentTime;
                    ToastAndroid.showWithGravityAndOffset(
                        "Want to exit?",
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                        25,
                        50,
                    );
                }
            }
        }
        return true;
    }

    onPressButton = () => {
        Actions.AddQuiz()

    }

    logout = async () => {
        await AsyncStorage.clear();
        Actions.reset('Login');
    }

    onPressSeeAvailableQuiz = () => {
        Actions.AvailableQuizes()
    }

    componentWillUnmount() {
        if (typeof BackPressed !== "undefined") {
            BackPressed.remove()
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginBottom: 40, height: 150, width: 150, borderRadius: 75 }}>
                    <Image source={require("../assets/logo.png")} style={{ height: 150, width: 150, borderRadius: 75 }} />
                </View>
                <Text style={{ fontSize: 20, color: "blue" }}>Hello {this.state.username}!</Text>
                <View style={{ marginTop: 20 }}>
                    <Button buttonTitle="Add New Quiz" onPress={() => this.onPressButton()} />
                </View>
                <Button
                    customStyle={{ backgroundColor: "#F5FCFF", borderWidth: 1, borderColor: "#841584", marginTop: 10 }}
                    buttonTitle="See Availble Quizes"
                    buttonTextStyle={{ color: "#841584" }}
                    onPress={() => this.onPressSeeAvailableQuiz()}
                />
                <View style={{ marginTop: 40 }}>
                    <Button
                        buttonTextStyle={{ color: "#FFFFFF" }}
                        customStyle={{ backgroundColor: "black", marginTop: 10, borderRadius: 5 }}
                        buttonTitle="Logout" onPress={() => this.logout()}
                    />
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
