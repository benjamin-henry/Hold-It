import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../Screens/Home"
import Play from "../Screens/Play"
import StandardMode from "../Screens/StandardMode"
import SequenceMode from "../Screens/SequenceMode"


const Stack = createStackNavigator()

const headerOptions = {
    headerStyle:{
        backgroundColor:"black",
        borderBottomWidth:1,
        borderBottomColor:"#777",
    },
    headerTintColor:"#ccc",   
}

export default class Routes extends Component {
    render() {
        return (
            <NavigationContainer>
                <StatusBar style='light'/>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
                    <Stack.Screen name="Play" component={Play} options={headerOptions}/>
                    <Stack.Screen name="StandardMode" component={StandardMode} options={{headerShown:false}}/>
                    <Stack.Screen name="SequenceMode" component={SequenceMode} options={{headerShown:false}}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}


