import React, { Component } from "react";
import {StyleSheet, TextInput, Text} from "react-native";

export default class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TextInput 
                style={[{ borderWidth: 1, width: 250, height: 40, borderRadius: 5, padding: 10, borderColor: "#841584" }, this.props.customStyle]} 
                placeholder={this.props.placeholder} 
                onChangeText={this.props.onChangeText}
                onFocus={this.props.onFocus}
                onBlur={this.props.onBlur}
                value={this.props.value}
                keyboardType={this.props.keyboardType}
            />
        )

    }
}

const styles = StyleSheet.create({

});
