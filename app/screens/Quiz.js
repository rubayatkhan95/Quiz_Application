import React, { Component } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button"
import AsyncStorage from "@react-native-community/async-storage";
import { Actions } from "react-native-router-flux";
import { ScrollView } from "react-native";

export default class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeView: true,
        };
    }

    async componentDidMount() {

        var count = this.props.count;
        console.warn(count)
    }

    onChangeNumber = (value) => {
        if (value > 0) {
            this.setState({ changeView: true })
        }
    }
    onPressButton = () => {

    }

    renderContent = () => {
        return (
            <ScrollView>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Input placeholder="Question" customStyle={{ width: "95%", marginTop: 15 }}></Input>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                            <View><Text style={{ color: "black", fontSize: 18 }}>1.</Text></View>
                            <Input customStyle={{ width: "80%" }} />
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                            <View><Text style={{ color: "black", fontSize: 18 }}>2.</Text></View>
                            <Input customStyle={{ width: "80%" }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                            <View><Text style={{ color: "black", fontSize: 18 }}>3.</Text></View>
                            <Input customStyle={{ width: "80%" }} />
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                            <View><Text style={{ color: "black", fontSize: 18 }}>4.</Text></View>
                            <Input customStyle={{ width: "80%" }} />
                        </View>
                    </View>

                </View>

            </ScrollView>
        )
    }

    render() {
        return (

            this.renderContent()
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
