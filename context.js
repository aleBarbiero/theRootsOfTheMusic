import React, { Component } from 'react';
import * as Network from 'expo-network';
import * as firebase from 'firebase';
import 'firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';
let network = null;
const ElementContext = React.createContext();
var dbh;

export default class ElementProvider extends Component {

    constructor(){
        super();
        this.state = {
            songs: [],
            lineups: [],
            sortedSongs: [],
            categories: []
        }
    }//constructor

    setUp = async() => {
        network = await Network.getNetworkStateAsync();
        if(network.isConnected && network.isInternetReachable){
            const firebaseConfig = {
                apiKey: "AIzaSyBVyO1i464opkN38w-54HQBZP7HG8JKIf4",
                authDomain: "therootsofthemusic.firebaseapp.com",
                databaseURL: "https://therootsofthemusic.firebaseio.com",
                projectId: "therootsofthemusic",
                storageBucket: "therootsofthemusic.appspot.com",
                messagingSenderId: "795790034485",
                appId: "1:795790034485:web:244787070628b9aa1b537c"
            }
            if(!firebase.apps.length){
                firebase.initializeApp(firebaseConfig);
                dbh = firebase.firestore();
                firebase.firestore().enablePersistence();
            }
        }//if
    }//setUp

    async componentDidMount(){
        await this.setUp()
        if(network.isConnected && network.isInternetReachable)
            await this.getData();
        else
            await this.getLocalData();
    }//componentDidMount

    getLocalData = async() => {
        try{
            const jsonSongs = await AsyncStorage.getItem("songs");
            const jsonLineups = await AsyncStorage.getItem("lineups");
            if(jsonSongs !== null && jsonLineups !== null)
                this.setState({
                    songs: JSON.parse(jsonSongs),
                    lineups: JSON.parse(jsonLineups)
                })
        }catch(e){
            return;
        }
    }//getLocalData

    getData = async() => {
        try{
            let tempSongs;
            dbh.collection("songs").get()
            .catch(e => {})
            .then(res => {
                tempSongs = res.docs.map(doc => {
                    return doc.data();
                })
                this.setState({songs: tempSongs,sortedSongs: tempSongs});
                let categories = this.getCategories(tempSongs);
                this.setState({categories});
                this.getLineups();
                
            })
            .then(now => async() => {
                try{
                    const jsonSongs = JSON.stringify(this.state.songs);
                    const jsonLineups = JSON.stringify(this.state.lineups);
                    await AsyncStorage.setItem("songs",jsonSongs);
                    await AsyncStorage.setItem("lineups",jsonLineups);
                }catch(e){
                    return;
                }//try_catch
            })
        }catch(e){
            return;
        }
    }//getData

    getCategories = (songs) => {
        let toReturn=new Set();
        songs.map(song => {
            return song.tags.map(item => toReturn.add(item));
        });
        return Array.from(toReturn).sort();
    }//getCategories

    getLineups = () => {
        try{
            let tempLineups;
            dbh.collection("lineup").get()
            .catch(e => {})
            .then(res => {
                tempLineups = res.docs.map(doc => {
                    return doc.data();
                })
                this.setState({lineups: tempLineups})
            })
        }catch(e){
            return;
        }
    }//getLineups

    sort = (param) => {
        let tempSongs = [];
        let tempFullSongs = this.state.songs;
        tempFullSongs.map(song => {
            if(song.title.toUpperCase().includes(param.toUpperCase()))
                tempSongs=[...tempSongs,song];
            return;
        })
        this.setState({sortedSongs: tempSongs})
    }//sort

    clear = () => {
        this.setState({sortedSongs: this.state.songs});
    }//clear

    findSong = (element) => {
        let {songs} = this.state;
        let toReturn = null;
        songs.map(song => {
            if(song.id === element)
                toReturn=song;
        })
        return toReturn;
    }//findSong

    addSong = (title,text,cats) => {
        let tags = cats.split("\n");
        tags.map((tag,index) => {
            tags[index] = tag.charAt(0).toUpperCase() + tag.slice(1);
        })
        let id = title.toLowerCase().replace(/ /g,'');
        let fullText=text.replace(/"/g, '"').split("\n");
        dbh.collection("songs").doc(id).set({
            id: id,
            title: title,
            tags: tags,
            text: fullText,    
        })
    }//addSong

    addLineup = () => {

    }//addLineup

    render() {
        return (
            <ElementContext.Provider value={{state: this.state,sort: this.sort,clear: this.clear,
            findSong: this.findSong,addSong: this.addSong,addLineup: this.addLineup}}>
                {this.props.children}
            </ElementContext.Provider>
        )
    }//render
}//ElementProvider

const ElementConsumer = ElementContext.Consumer;

export function withElementConsumer(Component){
    return function ConsumerWrapper(props){
        return(
            <ElementConsumer>
                {value => <Component {...props} context={value}/>}
            </ElementConsumer>
        )
    }
}//withElementConsumer

export {ElementProvider,ElementConsumer,ElementContext}