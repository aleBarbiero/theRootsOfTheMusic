import React, { Component } from 'react';
import {ElementContext} from '../context';
import {ScrollView,View,Text,StyleSheet,TouchableHighlight,Button,TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Textarea from 'react-native-textarea';
import Accordion from 'react-native-collapsible/Accordion';

var parts = [];

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
                activeSections: [],
                sections: [],
                ligthSongs: [],
                new: false,
                title: "",
                name: "",
                inizio: "...",
                alleluia: "...",
                offertorio: "...",
                santo: "...",
                comunione: "...",
                fine: "..."
            }
        }
    }//constructor

    static contextType = ElementContext;

    componentDidMount(){
        let {songs} = this.context.state;
        let ligthSongs = songs.map(item => {
            return {
                id: item.id,
                title: item.title
            }
        })
        let sections = parts.map(part => {
            return {
                title: part,
                content: ligthSongs
            }
        })
        this.setState({sections,ligthSongs});
    }

    renderSectionTitle = section => {
        return (
            <Text style={styles.title}>{section.title.toUpperCase()}</Text>
        );
    };

    renderHeader = section => {
        return (
        <View style={styles.header}>
            <Text style={styles.title}>{this.state[section.title] === "..." ? "..." : this.state.ligthSongs.find(song => {return song.id === this.state[section.title]}).title}</Text>
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
                                <TouchableOpacity key={item.title} onPress={() => {this.setState({[section.title]:item.id,activeSections: []})}}>
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

    addNew = () => {
        if(this.state.new)
            return(
                <>
                    <Text style={styles.title}>Titolo</Text>
                    <TextInput onChangeText={text => this.setState({title: text})} style={styles.form}></TextInput>
                    <View>
                        <TouchableHighlight style={{
                            padding: 10
                        }}>
                            <Button title="ANNULLA" color="#FF5233" onPress={() => {this.setState({new: false,title:""})}}></Button>
                        </TouchableHighlight>
                        
                        <TouchableHighlight style={{
                            padding: 10
                        }}>
                            <Button title="AGGIUNGI" color="#33FF7D" onPress={() => {this.pushItem()}}></Button>
                        </TouchableHighlight>
                    </View>
                </>
            );
        else
            return <></>
    }//addNew

    pushItem = () => {
        if(this.state.title !== "" && !parts.includes(this.state.title)){
            let newValue = this.state.title;
            parts.push(newValue);
            let tempSec = this.state.sections;
            tempSec.push({
                title: newValue,
                content: this.state.ligthSongs
            });
            this.setState({new: false,title:"",[newValue]: "...",sections: tempSec});
        }
    }//pushItem

    addSong = () => {
        let {addSong} = this.context;
        if(this.state.title !== "" && this.state.text !== "" && this.state.cat !== ""){
            addSong(this.state.title,this.state.text,this.state.cat);
            this.props.navigation.navigate("Home");
        }
    }//addSong

    addLineup = () => {
        let {addLineup} = this.context;
        let error = false;
        if(this.state.name === "")
            error = true;
        if(parts.length === 0)
            error = true;
        let lineup = parts.map(part => {
            if(this.state[part] === "...")
                error=true;
            return {
                id: part,
                value: this.state[part]
            }
        })
        if(!error){
            addLineup(this.state.name,lineup);
            this.props.navigation.navigate("Home");
            this.setState({parts: [],sections: []});
        }
    }//addLineup

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
            return (
                <ScrollView>
                    <Text style={styles.title}>NOME</Text>
                    <TextInput onChangeText={text => this.setState({name: text})} style={styles.form}></TextInput>
                    <Accordion
                        sections={this.state.sections}
                        activeSections={this.state.activeSections}
                        renderSectionTitle={this.renderSectionTitle}
                        renderHeader={this.renderHeader}
                        renderContent={this.renderContent}
                        onChange={this.updateSections}
                        underlayColor="#fff"
                    />
                    {
                        this.addNew()
                    }
                    <TouchableHighlight style={{
                        width: 200,
                        margin: 25,
                        alignSelf: "center" 
                    }}>
                        <Button title="+" color="#33FF7D" onPress={() => {this.setState({new: true})}}></Button>
                    </TouchableHighlight>
                    <TouchableHighlight style={{
                        width: 200,
                        margin: 30,
                        backgroundColor: "#222",
                        alignSelf: "center"
                    }}>
                        <Button title="Crea nuova scaletta" color="#ff8a01" onPress={() => {this.addLineup()}}>
                        </Button>
                    </TouchableHighlight>
                    <TouchableHighlight style={{
                        width: 200,
                        margin: 10,
                        backgroundColor: "#ff5233",
                        alignSelf: "center"
                    }}>
                        <Button title="Annulla" color="#ff5233" onPress={() => {this.setState({parts: [],sections: []})}}>
                        </Button>
                    </TouchableHighlight>
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
        marginTop: 3,
        textAlign: "center"
    },
    titleCat: {
        fontSize: 30,
        color: "#222",
        fontFamily: "Roboto",
        fontWeight: "normal",
        alignSelf: "center",
        textAlign: "center"
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
    },
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