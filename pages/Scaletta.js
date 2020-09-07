import React, { Component } from 'react';
import {ScrollView,View,Text,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ElementContext } from '../context';

export default class Scaletta extends Component {

    constructor(props){
        super(props);
        this.props.navigation.setOptions({title: this.props.route.params.element.name})
    }

    static contextType = ElementContext;

    getPart = (id) => {
        let {findSong} = this.context;
        let index = this.props.route.params.element;
        let song = findSong(index[id].song);
        return(
            <>
                <View style={styles.header}>
                    <Text style={styles.title}>{id.toUpperCase()}</Text>
                </View>
                <View style={styles.item}>
                    <TouchableOpacity key={index.name-id} onPress={() => this.props.navigation.navigate("Canzone",{element: {id: song.id,title: song.title},navigation: this.props.navigation,isSmartphone: this.props.route.params.isSmartphone})}>
                        <Text style={styles.element}>{song.title}</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }//getPart

    render(){
        var temp = this.props.route.params.element;
        var keys = Object.keys(temp);
        keys = keys.filter(x => x !== "id" && x !== "name");
        keys = keys.sort((a,b) => (temp[a].id > temp[b].id) ? 1 : ((temp[b].id > temp[a].id) ? -1 : 0));
        return(
            <ScrollView>
                {
                    keys.map(item => {
                        return this.getPart(item);
                    })
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        borderStyle: "solid",
        borderTopWidth: 1,
        borderTopColor: "#ff8a01"
    },
    title: {
        fontSize: 30,
        color: "#ff8a01",
        fontFamily: "Roboto",
        fontWeight: "normal",
        alignSelf: "center",
        marginTop: 3
    },
    element: {
        fontSize: 30,
        color: "#222",
        fontFamily: "Roboto",
        fontWeight: "normal",
        alignSelf: "center",
        marginTop: 3,
        textAlign: "center"
    },
    item: {
        backgroundColor: '#fff',
        padding: 20,
        borderStyle: "solid",
        borderColor: "#ff8a01",
        borderRadius: 15,
        borderWidth: 1,
        margin: 5,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11
    },
})