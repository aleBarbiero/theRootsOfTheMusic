import React, { Component } from 'react';
import {View, Text, FlatList,StyleSheet} from 'react-native';
import {ElementContext} from '../context';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Scalette extends Component {

    constructor(props){
        super(props);
    }

    static contextType = ElementContext;

    render() {
        let {lineups} = this.context.state;
        const renderItem = ({item}) => (
            <View style={styles.item}>
                <TouchableOpacity key={item.name} onPress={() => this.props.navigation.navigate("Scaletta",{element: item,navigation: this.props.navigation})}>
                    <Text style={styles.title}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        );

        return (
            <>
                {
                    lineups.length > 0 ? <FlatList data={lineups} renderItem={renderItem} keyExtractor={item => item.name}/> : <View></View>
                }
            </>
        )
    }//render
}

export default Scalette;

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 20,
        borderStyle: "solid",
        borderColor: "#ff8a01",
        borderRadius: 15,
        borderWidth: 1,
        margin: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    title: {
      fontSize: 30,
      color: "#222",
      fontFamily: "Roboto",
      fontWeight: "normal",
      alignSelf: "center"
    },
});