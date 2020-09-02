import React, { Component } from 'react';
import {ScrollView,View,Text,StyleSheet} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {ElementContext} from '../context';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Categorie extends Component{

    constructor(props){
        super(props);
        this.state = {
            activeSections: []
        };
    }//constructor

    static contextType = ElementContext;
  
    renderSectionTitle = section => {
        return (
        <></>
        );
    };

    renderHeader = section => {
        return (
        <View style={styles.header}>
            <Text style={styles.title}>{section.title}</Text>
        </View>
        );
    };

    renderContent = section => {
        return (
            <View>
                {
                    section.content.map(item => {
                        return (
                            <View style={styles.item}>
                                <TouchableOpacity key={item.title} onPress={() => this.props.navigation.navigate("Canzone",{element: {id: item.id,title: item.title},navigation: this.props.navigation})}>
                                    <Text style={styles.title}>{item.title}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>
        );
    };

    updateSections = activeSections => {
        this.setState({ activeSections });
    };

    getSongs = (category) => {
        let tempSongs = [];
        let {songs} = this.context.state;
        songs.map(song => {
            if(song.tags.findIndex(item => category.toLowerCase() === item.toLowerCase()) !== -1)
                tempSongs=[...tempSongs,song];
        })
        return tempSongs;
    }//getSongs

    render() {
        let {categories} = this.context.state;
        let SECTIONS = categories.map(category => {
            return {
                title: category,
                content: this.getSongs(category)
            }
        })
        return (
            <ScrollView>
                <Accordion
                    sections={SECTIONS}
                    activeSections={this.state.activeSections}
                    renderSectionTitle={this.renderSectionTitle}
                    renderHeader={this.renderHeader}
                    renderContent={this.renderContent}
                    onChange={this.updateSections}
                    underlayColor="#fff"
                />
            </ScrollView>
        
        );
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
        elevation: 11
    },
    title: {
      fontSize: 30,
      color: "#222",
      fontFamily: "Roboto",
      fontWeight: "normal",
      alignSelf: "center"
    },
    header: {
        backgroundColor: '#ff8a01',
        padding: 20,
        borderStyle: "solid",
        borderColor: "#222",
        borderWidth: 1,
        marginBottom: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11
    }
});
