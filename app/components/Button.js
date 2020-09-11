import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


export default class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.container, this.props.customStyle]}>
                <TouchableOpacity
                    style={styles.button}
                    onPressIn={this.props.onPress}
                    activeOpacity={0.7}
                >
                    <Text style={[styles.buttonTitle, this.props.buttonTextStyle]} >{this.props.buttonTitle}</Text>
                </TouchableOpacity>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: 250,
        borderRadius: 5,
        backgroundColor:"#841584" 
    },
    button: {
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        width: "80%",
        height: 40,
        padding: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonTitle: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "bold",
        color:"white"
    }
});

