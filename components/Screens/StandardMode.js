import React, { Component, useRef } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Animated } from 'react-native'
import {setScreenOrientation} from '../ScreenParameters/orientation'

import Tile from '../Tile/tile'


export default class StandardMode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [],
            level:1,
            leftPanelVisible:true,
            tilesMasked:false,
            expectedNextValue:0,
            tileContainerBorderOpacity: new Animated.Value(0.)
        }
    }

    async componentDidMount() {
        await setScreenOrientation("LR")
    }

    generateBoxes =  (containerWidth, containerHeight, boxSize, nBoxes) => {
        const rows2D = Math.floor(containerHeight / boxSize)
        const cols2D = Math.floor(containerWidth / boxSize)
        let range = []
        for (let i = 0; i < rows2D*cols2D; i++) {
            range.push(i)
        }
        let boxes = []
        for(let i = 0; i < nBoxes; i++){
            const rand_i = Math.floor(Math.random()*(range.length-1))
            const idx_1d = range[rand_i]
            boxes.push({
                value: i,
                left:Math.floor(idx_1d%cols2D) * boxSize,
                top:Math.floor((idx_1d/cols2D)%rows2D) * boxSize
            })
            range.splice(rand_i,1)
        }
        return boxes
    }

    levelSuccess = () => {
        this.setState({level: this.state.level+1})
        this.setState({boxes:[],tilesMasked:false,expectedNextValue:0})
        this.setState({leftPanelVisible:true})
    }

    levelFailed = () => {
        if(this.state.level > 1) {
            this.setState({level: this.state.level-1})
        }
    }

    readyPressed = (e) => {
        e.preventDefault()
        this.setState({tilesMasked:false,expectedNextValue:0})

        const boxes = this.generateBoxes(640,320,80,this.state.level+1)
        this.setState({boxes,leftPanelVisible:false})

        setTimeout(()=>{
            this.setState({tilesMasked:true})
        },1000)
    }

    backPressed = (e) => {
        e.preventDefault()
        this.props.navigation.goBack()
    }

    tileTouched = (value) => {
        if(value == this.state.expectedNextValue) {
            if(value == this.state.boxes.length-1) {
                this.levelSuccess()
            }
            this.setState({expectedNextValue:value+1})
        }
        else {
            this.levelFailed()
            this.setState({boxes:[],tilesMasked:false,expectedNextValue:0})
            this.setState({leftPanelVisible:true})
        }
    }

    

    render() {
        return (
            <View style={styles.container}>
                <View style={Object.assign({
                    left: this.state.leftPanelVisible ? 16: -300
                    },
                    styles.left__container
                )}>
                    <TouchableOpacity style={styles.ready__button} onPress={this.backPressed}>
                        <Text style={styles.button__text}>back</Text>
                    </TouchableOpacity>

                    <View style={styles.lvl__info}>
                        <Text style={styles.lvl__text}>LVL</Text>
                        <Text style={styles.lvl__index}>{this.state.level}</Text>
                    </View>

                    <TouchableOpacity style={styles.ready__button} onPress={this.readyPressed}>
                        <Text style={styles.button__text}>ready</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.tiles__container}>
                    {this.state.boxes.map((box)=>(
                        <Tile
                            size={80}
                            top={box.top}
                            left={box.left}
                            masked={this.state.tilesMasked}
                            value={box.value}
                            touched={this.tileTouched}
                        />
                    ))}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems:'center',
        justifyContent:"center",
        flexDirection:"row",
        flex:1,
        backgroundColor:"black",
    },
    left__container: {
        position:"absolute",
        
        height:320,
        alignItems:"center",
        justifyContent:"space-between"
    },
    lvl__info:{
        alignItems:'center',
        justifyContent:"center"
    },
    lvl__text:{
        color:"white",
        fontSize:30
    },
    lvl__index:{
        color:"white",
        fontSize:30
    },
    tiles__container: {
        width: 640,
        height: 320,
        // borderColor:"green",
        // borderWidth:1
    },
    ready__button:{
        width:64,
        height:64,
        borderRadius:32,
        bottom:0,
        borderColor:"white",
        borderWidth:1,
        alignItems:"center",
        justifyContent:"center"
    },
    button__text: {
        color:"white",
        fontSize:12
    }
})
