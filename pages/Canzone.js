import React, { Component } from 'react';
import {ScrollView,Text,StyleSheet,View} from 'react-native';
import {ElementContext} from "../context";

export default class Canzone extends Component {

    constructor(props){
        super(props);
        this.props.navigation.setOptions({title: this.props.route.params.element.title})
        const {isSmartphone} = this.props.route.params;
        this.state = {
            size: isSmartphone
        }
    }//constructor

    static contextType = ElementContext;

    onPinchGestureEvent = event => {
        console.log(event.nativeEvent.scale);
    }

    render() {
        let {id} = this.props.route.params.element;
        let {findSong} = this.context;
        let element = findSong(id);
        let rit = false;
        return (   
            <ScrollView style={styles.scrollView}>
                {
                    element.text.map((item,index) => {
                        if(item === "-RIT-"){
                            rit=!rit;
                        return <Text key={index}>{}</Text>
                        }
                        if(!rit)
                            return <Text style={{
                                lineHeight: this.state.size,
                                fontSize: this.state.size}} key={index}>{item}{"\n"}</Text>;
                        else
                            return <Text style={{
                                fontWeight: "bold",
                                color: "#ff8a01",
                                fontSize: this.state.size+2,
                                lineHeight: this.state.size+2}} key={index}>{item}{"\n"}</Text>;
                    })
                } 
            </ScrollView>
        )
    }//render

}//Canzone

const styles = StyleSheet.create({
    textRit: {
        fontWeight: "bold",
        color: "#ff8a01",
        fontSize: 17,
        lineHeight: 17
    },
    scrollView: {
        marginTop: 15,
        marginLeft: 15,
        paddingRight: 10
    }
})
