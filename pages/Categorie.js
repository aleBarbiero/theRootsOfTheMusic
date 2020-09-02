import React, { Component } from 'react';
import {View,Text} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {ElementContext} from '../context'

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
        <View>
            <Text>{section.title}</Text>
        </View>
        );
    };

    renderContent = section => {
        return (
        <View>
            <Text>{section.content.title}</Text>
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
        <Accordion
            sections={SECTIONS}
            activeSections={this.state.activeSections}
            renderSectionTitle={this.renderSectionTitle}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            onChange={this.updateSections}
        />
        );
    }
}