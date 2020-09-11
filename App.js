
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Login from './app/screens/Login';
import Routes from "./app/routes/routes"


export default class App extends Component {
  render() {
    return (
      <Routes/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
