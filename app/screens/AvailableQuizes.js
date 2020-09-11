import React, { Component } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button"
import AsyncStorage from "@react-native-community/async-storage";
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native";

var quizList = require('../data/availableQuizJson');

export default class AvailableQuizes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeView: true,
            array: []
        };
    }
    componentDidMount() {
        var count = this.props.count;
        var tempArray = []
        for (let i = 0; i < quizList.length; i++) {
            tempArray.push({
                module: quizList[i].module
            })
        }
        this.setState({ array: tempArray })


    }

    onPressButton = (value) => {
        Actions.QuizDetails({ moduleName: value })
    }

    renderQuiz = (value, index) => {
        return (
            <View style={{ marginTop: 10, alignItems: "center" }}>
                <Button
                    buttonTitle={value.module.name}
                    buttonTextStyle={{ color: "#841584" }}
                    customStyle={{ backgroundColor: "#F5FCFF", borderWidth: 1, borderColor: "#841584", marginTop: 10, width: "90%" }}
                    onPress={() => this.onPressButton(value.module.name)}
                />
            </View>
        )
    }

    render() {
        return (
            <ScrollView>
                <View style={{ paddingTop: 20 }}></View>
                {this.state.array.map((value, index) =>
                    this.renderQuiz(value, index))
                }

                <View style={{ height: 50 }}></View>
            </ScrollView>
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
