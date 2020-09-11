import React, { Component } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button"
import AsyncStorage from "@react-native-community/async-storage";
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native";

export default class AddQuiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    async componentDidMount() {
        let user = await AsyncStorage.getItem("user");
        let userObject = JSON.parse(user)
    }

    onChangeNumber = (value) => {
        this.setState({ count: value })
        if (value > 0) {
            this.setState({ changeView: true })
        }
    }
    onPressButton = () => {
        if (this.state.count > 0) {
            Actions.Quiz({ count: this.state.count })
        }

    }

    render() {
        return (

            <View style={styles.container}>
                <View>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ fontSize: 15, color: "blue", marginBottom: 5 }}>Enter Number of Questions</Text>
                        <Input onChangeText={(value) => this.onChangeNumber(value)} keyboardType="numeric" />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Button buttonTitle="Add" onPress={() => this.onPressButton()} />
                    </View>
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
