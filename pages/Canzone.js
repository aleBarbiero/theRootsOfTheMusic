import React, { Component } from 'react';
import {ScrollView,Text,StyleSheet} from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

export default class Canzone extends Component {

    constructor(props){
        super(props);
        this.props.navigation.setOptions({title: this.props.route.params.element.title})
        this.state = {
            size: 15
        }
    }//constructor

    onPinchGestureEvent = event => {
        console.log(event.nativeEvent.scale);
    }

    render() {
        let {element} = this.props.route.params;
        let rit = false;
        return (   
            <ReactNativeZoomableView
                    maxZoom={1.5}
                    minZoom={1}
                    zoomStep={0.2}
                    initialZoom={1}
                    bindToBorders={true}
                    onZoomAfter={this.logOutZoomState}
                    style={styles.scrollView}>
            <ScrollView >
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
            </ReactNativeZoomableView>
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
