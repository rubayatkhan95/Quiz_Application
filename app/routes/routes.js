import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene, Stack, Drawer, Actions, ActionConst, Tabs } from 'react-native-router-flux';
import AddQuiz from '../screens/AddQuiz';
import Authentication from '../screens/Authentication';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Quiz from '../screens/Quiz';
import Registration from '../screens/Registration';


export default class RoutePages extends Component {
    constructor() {
        super()

    }
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene
                        key="Authentication"
                        initial
                        component={Authentication}
                        hideNavBar={true}
                    />

                    <Scene
                        key="Login"
                        component={Login}
                        hideNavBar={true}
                    />
                     <Scene
                        key="Registration"
                        component={Registration}
                        hideNavBar={true}
                    />
                    <Scene
                        key="Home"
                        component={Home}
                        hideNavBar={true}
                    />
                      <Scene
                        key="AddQuiz"
                        component={AddQuiz}
                        hideNavBar={true}
                    />
                      <Scene
                        key="Quiz"
                        component={Quiz}
                        hideNavBar={true}
                    />
                </Scene>
            </Router>
        );
    }
}

const styles = StyleSheet.create({

});


//export default RoutePages;