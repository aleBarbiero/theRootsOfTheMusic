import React, { Component } from 'react';
import {View, Text, FlatList,StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {ElementContext} from '../context';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Lista extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchTerm: ""
        }
    } 

    updateText = (searchTerm) => {
        const {sort} = this.context;
        this.setState({searchTerm});
        sort(searchTerm);
    }

    static contextType = ElementContext;

    render() {
        const {searchTerm} = this.state;
        let {sortedSongs,songs} = this.context.state;
        const {clear} = this.context;
        const renderItem = ({item}) => (
            <View style={styles.item}>
                <TouchableOpacity key={item.title} onPress={() => this.props.navigation.navigate("Canzone",{element: item,navigation: this.props.navigation})}>
                    <Text style={styles.title}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        );

        return (
            <>
                <View>
                    <SearchBar
                        inputStyle={{
                            backgroundColor: "#222"
                        }}
                        containerStyle={{
                            backgroundColor: "#222"
                        }}
                        inputContainerStyle={{
                            backgroundColor: "#222"
                        }}
                        placeholder="Cerca per titolo"
                        onChangeText={this.updateText}
                        value={searchTerm}
                        onClear={clear}
                    ></SearchBar>
                </View>
                {
                    this.state.searchTerm === "" ? <FlatList data={songs} renderItem={renderItem} keyExtractor={item => item.title}/> :
                        sortedSongs.length > 0 ? <FlatList data={sortedSongs} renderItem={renderItem} keyExtractor={item => item.title}/> : <View></View>
                }
                
            </>
        )
    }
}

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

export default Lista;