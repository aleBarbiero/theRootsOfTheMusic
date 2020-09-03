import React, { Component } from 'react';
import {ElementContext} from '../context';
import {ScrollView,View,Text,StyleSheet,TouchableHighlight,Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Textarea from 'react-native-textarea';
import {Picker} from '@react-native-community/picker';

export default class Forms extends Component {

    constructor(props){
        super(props);
        if(this.props.route.params.type){
            this.state = {
                title: "",
                text: "",
                cat: ""
            }
        }else{
            this.state = {
                name: "",
                inizio: ""
            }
        }
    }//constructor

    static contextType = ElementContext;

    addSong = () => {
        let {addSong} = this.context;
        if(this.state.title !== "" && this.state.text !== "" && this.state.cat !== ""){
            addSong(this.state.title,this.state.text,this.state.cat);
            this.props.navigation.navigate("Home");
        }
    }//addSong

    render() {
        if(this.props.route.params.type){
            return (
                <ScrollView>
                    <Text style={styles.title}>Titolo</Text>
                    <TextInput onChangeText={text => this.setState({title: text})} style={styles.form}></TextInput>
                    <Text style={styles.title}>Testo</Text>
                    <View style={styles.container}>
                        <Textarea
                            containerStyle={styles.textareaContainer}
                            style={styles.textarea}
                            onChangeText={text => this.setState({text: text})}
                            defaultValue={this.state.text}
                        ></Textarea>
                    </View>
                    <Text style={styles.titleCat}>Categorie</Text>
                    <View style={styles.container}>
                        <Textarea
                            containerStyle={styles.textareaContainerCat}
                            style={styles.textareaCat}
                            onChangeText={text => this.setState({cat: text})}
                            defaultValue={this.state.cat}
                        ></Textarea>
                    </View>
                    <View style={{alignItems: "center"}}>
                        <TouchableHighlight style={{
                            width: 200,
                            marginTop: 30,
                            backgroundColor: "#222"
                        }}>
                        <Button title="Crea nuova canzone" color="#ff8a01" onPress={() => {this.addSong()}}></Button>
                    </TouchableHighlight>
                    </View>
                </ScrollView>
            )
        }else{
            let {songs} = this.context.state;
            return (
                <ScrollView>
                    <TextInput onChangeText={text => this.setState({name: text})} style={styles.formLineup}></TextInput>
                    <Text style={styles.title}>Inizio</Text>
                    <Picker
                        onValueChange={(value) => this.setState({inizio: value})}
                        selectedValue={this.state.inizio}>
                        {
                            songs.map(item => {
                                return <Picker.Item label={item.title} value={item.id}></Picker.Item>
                            })
                        }    
                    </Picker>
                </ScrollView>
            )
        }
    }
}//Forms

const styles = StyleSheet.create({
    form: {
        borderColor: "#ff8a01",
        borderWidth: 1,
        borderStyle: "solid",
        marginHorizontal: 10,
        height: 40,
        fontSize: 18,
        paddingLeft: 10,
        fontFamily: "Roboto"
    },
    formLineup: {
        borderColor: "#ff8a01",
        borderWidth: 1,
        borderStyle: "solid",
        marginHorizontal: 10,
        marginTop: 10,
        height: 40,
        fontSize: 18,
        paddingLeft: 10,
        fontFamily: "Roboto"
    },
    title: {
        fontSize: 30,
        color: "#222",
        fontFamily: "Roboto",
        fontWeight: "normal",
        alignSelf: "center",
        marginTop: 3
    },
    titleCat: {
        fontSize: 30,
        color: "#222",
        fontFamily: "Roboto",
        fontWeight: "normal",
        alignSelf: "center",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    textareaContainer: {
        height: 300,
        padding: 10,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#ff8a01",
        fontFamily: "Roboto"
    },
    textarea: {
        textAlignVertical: 'top',
        height: 280,
        fontSize: 18,
        color: '#222',
    },
    textareaContainerCat: {
        height: 100,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#ff8a01",
        fontFamily: "Roboto"
    },
    textareaCat: {
        padding: 10,
        textAlignVertical: 'top',
        height: 100,
        fontSize: 18,
        color: '#222',
    }
})