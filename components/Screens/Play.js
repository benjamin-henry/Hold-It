import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import {setScreenOrientation} from '../ScreenParameters/orientation'

export default class Play extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        await setScreenOrientation("LR")
    }

    async componentWillUnmount() {
        await setScreenOrientation("PU")
    }

    standardPressed = (e) => {
        e.preventDefault();
        this.props.navigation.navigate("StandardMode")
    }

    
    sequencePressed = (e) => {
        e.preventDefault();
        this.props.navigation.navigate("SequenceMode")
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.standardPressed}>
                    <Text style={styles.button__label}> Standard Mode </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.sequencePressed}>
                    <Text style={styles.button__label}> Sequence Mode </Text>
                </TouchableOpacity>
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
    button: {
        width:250,
        height: 64,
        backgroundColor:"transparent",
        borderRadius:32,
        borderWidth:3,
        borderColor:"#ccc",
        justifyContent:"center",
        alignItems:"center",
        margin:8
    },
    button__label:{
        color:"#ccc",
        fontSize: 25,
        fontWeight:"bold",
    }, 
})
