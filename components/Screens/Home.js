import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import {setScreenOrientation} from '../ScreenParameters/orientation'

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        await setScreenOrientation("PU")
    }

    async componentDidUpdate() {
        await setScreenOrientation("PU")
    }

    playPressed = (e) => {
        e.preventDefault()
        this.props.navigation.navigate("Play")
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.top__container}> 
                    <Image
                        style={styles.app__logo}
                        source={require('../../assets/brain_icon.png')}
                        />
                    <Text style={styles.top__text}>Hold It !</Text>
                </View>

                <View style={styles.middle__container}> 
                    <TouchableOpacity style={styles.middle__button} onPress={this.playPressed}>
                        <Text style={styles.middle__button__label}>PLAY</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer__container}> 
                    <Text style={styles.smart__baboon__text}>Smart Baboon Prod.</Text>
                    <Image 
                        style={styles.smart__baboon__logo} 
                        source={require('../../assets/smart_baboon.png')}/>  
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems:'center',
        flex:1,
        backgroundColor:"black"
    },
    top__container: {
        justifyContent:"center",
        alignItems:"center",
        marginTop:80
    },
    app__logo: {
        width: 150,
        height: 150,
        backgroundColor:"transparent",
        marginBottom:24
    },
    top__text:{
        color:"#ddd",
        fontSize:40,
        fontWeight:"bold"
    },
    middle__container: {
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    },
    middle__button: {
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
    middle__button__label:{
        color:"#ccc",
        fontSize: 25,
        fontWeight:"bold",
    },  
    footer__container: {
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",     
    },
    smart__baboon__text:{
        color:"#ddd",
        fontStyle: "italic",
        fontWeight:"bold"
    },
    smart__baboon__logo: {
        width: 40,
        height: 40,
        marginLeft: 8
    },
})
