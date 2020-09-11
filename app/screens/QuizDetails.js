import React, { Component } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button"
import AsyncStorage from "@react-native-community/async-storage";
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native";
import { CheckBox } from "react-native";
var Questions = require('../data/questions');


export default class QuizDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeView: true,
            questionArray: [],
            isSelected: []
        };
    }
    componentDidMount() {
        for (let i = 0; i < Questions.length; i++) {
            if (Questions[i].moduleName == this.props.moduleName) {
                this.setState({
                    questionArray: Questions[i].questions,
                })
            }
        }
    }

    setSelection = (key) => {
        if (this.state.isSelected[key] == true) {
            this.state.isSelected[key] = false;
        } else {
            this.state.isSelected[key] = true;
        }

    }

    onPressSubmit = async() =>{
        let alreadyLoggedIn = await AsyncStorage.getItem("alreadyLoggedIn");
        if(alreadyLoggedIn == "true"){
            setTimeout(() => {
                Actions.reset("Home")
            }, 1000);
        } else {
            setTimeout(() => {
                Actions.InputUsername()
            }, 1000);
           
        }
       
    }


    renderQuiz = (value, index) => {
        return (
            <View style={{ flex: 1, marginTop: 20, marginLeft: 15, marginRight: 15 }}>
                <Text style={{ color: "black", fontSize: 18, fontWeight: "bold", paddingLeft: 10, paddingRight: 10, marginTop: 10 }}>{index + 1} {value.question}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 , marginLeft:10 }}>
                    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", flexDirection: "row" }}>
                        <View styles={{ marginLeft: 25 }}>
                            <CheckBox
                                value={this.state.isSelected[index]}
                                onValueChange={() => this.setSelection(index)}
                            />
                        </View>
                        <View>
                            <Text style={{ color: "black", fontSize: 18, paddingLeft: 2, paddingRight: 10 }}>{value.answers[0]}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", flexDirection: "row" }}>
                        <View styles={{ marginLeft: 25 }}>
                            <CheckBox
                                value={this.state.isSelected[index]}
                                onValueChange={() => this.setSelection(index)}
                            />
                        </View>
                        <View>
                            <Text style={{ color: "black", fontSize: 18, paddingLeft: 2, paddingRight: 10 }}>{value.answers[1]}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 , marginLeft:10 }}>
                    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", flexDirection: "row" }}>
                        <View styles={{ marginLeft: 25}}>
                            <CheckBox
                                value={this.state.isSelected[index]}
                                onValueChange={() => this.setSelection(index)}
                            />
                        </View>
                        <View>
                            <Text style={{ color: "black", fontSize: 18, paddingLeft: 2, paddingRight: 10 }}>{value.answers[2]}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", flexDirection: "row" }}>
                        <View styles={{ marginLeft: 25 }}>
                            <CheckBox
                                value={this.state.isSelected[index]}
                                onValueChange={() => this.setSelection(index)}
                            />
                        </View>
                        <View>
                            <Text style={{ color: "black", fontSize: 18, paddingLeft: 2, paddingRight: 10 }}>{value.answers[3]}</Text>
                        </View>
                    </View>
                </View>

            </View>
        )
    }

    render() {
        return (
            <ScrollView>
                <View style={{ paddingTop: 20 }}></View>
                {this.state.questionArray.map((value, index) =>
                    this.renderQuiz(value, index))
                }
                <View style={{ marginTop: 50, justifyContent: "center", alignItems: "center" }}>
                    <Button buttonTitle="Submit" onPress={() => this.onPressSubmit()} />
                </View>
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
