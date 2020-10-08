import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Parameters extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{color:"white"}}> Options </Text>
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
})
