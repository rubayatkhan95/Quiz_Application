import React, { Component } from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Image } from "react-native";
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
            setTimeout(() => {
                Actions.reset("Home")
            }, 1000);
        } else {
            setTimeout(() => {
                Actions.reset("Login")
            }, 1000);
           
        }
    }
   
    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginBottom: 40, height:150, width:150 , borderRadius:75 }}>
                    <Image  source ={require("../assets/logo.png")} style={{height:150, width:150, borderRadius:75}}/>
                </View>
                <Text style={{fontSize:40 , fontWeight:"bold" , color:"#FFFFFF"}}>Quiz App</Text>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#841575',
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
