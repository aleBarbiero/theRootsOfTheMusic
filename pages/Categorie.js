import React, { Component } from 'react';
import {View,Text} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
  {
    title: 'First',
    content: "blablabla -1 "
  },
  {
    title: 'Second',
    content: "blablabla -2"
  },
];

export default class Categorie extends Component{

    constructor(props){
        super(props);
        this.state = {
            activeSections: []
        };
    }//constructor
  
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
        <Text>{section.content}</Text>
      </View>
    );
  };

  updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
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