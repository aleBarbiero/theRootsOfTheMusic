import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import {SearchBar} from 'react-native-elements';

class Lista extends Component {

    state = {
        searchTerm: ""
    }

    updateText = (searchTerm) => {
        this.setState({searchTerm})
    }

    render() {
        const {searchTerm} = this.state;
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
                    ></SearchBar>
                </View>
            </>
        );
    }
}

export default Lista;