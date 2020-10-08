import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import {setScreenOrientation} from '../ScreenParameters/orientation'

export default class StandardMode extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        await setScreenOrientation("LR")
    }

    


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Sequence Mode not available yet ! </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems:'center',
        justifyContent:"center",
        flex:1,
        backgroundColor:"black"
    },
    text:{
        color:"#ccc",
        fontSize: 25,
        fontWeight:"bold",
    }, 
})
