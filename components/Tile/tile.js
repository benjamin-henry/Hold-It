import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Tile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visible:true,
            touched:false
        }
    }


    onTouch = (e) => {
        e.preventDefault()
        if(this.state.touched===false && this.props.masked) {
            this.setState({
                visible:false,
                touched:true
            })
            this.props.touched(this.props.value)
        }
        
    }
    render() {
        return (
            <View key={this.props.value} style={Object.assign({
                width:this.props.size,
                height:this.props.size,
                opacity: this.state.visible ? 1 : 0,
                backgroundColor:'transparent',
                top:this.props.top,
                left:this.props.left,
                },styles.tile)}
            >
                <View 
                    onTouchStart={(e)=>{this.onTouch(e)}}
                    style={
                    Object.assign({
                        backgroundColor: this.props.masked ? 'white' : 'transparent'
                        },
                        styles.numberContainer)
                    }
                >
                    <Text style={styles.numberContainerContent}>{this.props.value}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tile: {
        padding:5,
        position:"absolute"
    },
    numberContainer: {
      borderColor: 'white',
      borderWidth: 2,
      justifyContent:'center',
      alignItems: 'center',
      display:'flex',
      flex:1
    },
    numberContainerContent: {
      color:'white',
      fontSize: 50,
    }
});