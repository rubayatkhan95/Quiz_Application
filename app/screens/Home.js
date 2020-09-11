import React, { Component } from "react";
import { View, StyleSheet, TextInput, Text} from "react-native";
import Input from "../components/Input";
import Button from "../components/Button"
import AsyncStorage from "@react-native-community/async-storage";
import { Actions } from "react-native-router-flux";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNumber: "",
        };
    }

    async componentDidMount(){
        let user = await AsyncStorage.getItem("user");
        let userObject = JSON.parse(user)
        console.warn(userObject.username)
    }
    onPressButton = () =>{
        Actions.AddQuiz()
     
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize:20 ,color:"blue"}}>Hello {this.props.username}!</Text>
                <View style ={{marginTop:20}}>
                    <Button buttonTitle ="Add New Quiz" onPress= {()=>this.onPressButton()}/>
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
