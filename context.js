import React, { Component } from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';
const ElementContext = React.createContext();
var dbh;

export default class ElementProvider extends Component {

    constructor(){
        super();
        const firebaseConfig = {
            apiKey: "AIzaSyBVyO1i464opkN38w-54HQBZP7HG8JKIf4",
            authDomain: "therootsofthemusic.firebaseapp.com",
            databaseURL: "https://therootsofthemusic.firebaseio.com",
            projectId: "therootsofthemusic",
            storageBucket: "therootsofthemusic.appspot.com",
            messagingSenderId: "795790034485",
            appId: "1:795790034485:web:244787070628b9aa1b537c"
        }
        if(!firebase.apps.length) 
            firebase.initializeApp(firebaseConfig);
        dbh = firebase.firestore();
        /*dbh.collection("songs").doc(title.toLowerCase().replace(" ","")).set({
            title: title,
            tags: tags,
            text: text.split("\n")    
        })*/

        this.state = {
            songs: [],
            lineups: [],
            sortedSongs: [],
            categories: []
        }
    }//constructor

    componentDidMount(){
        this.getData();
    }//componentDidMount

    getData = () => {
        let tempSongs;
        dbh.collection("songs").get()
        .then(res => {
            tempSongs = res.docs.map(doc => {
                return doc.data();
            })
            this.setState({songs: tempSongs,sortedSongs: tempSongs});
            let categories = this.getCategories(tempSongs);
            this.setState({categories});
        })  
    }//getData

    getCategories = (songs) => {
        let toReturn=new Set();
        songs.map(song => {
            return song.tags.map(item => toReturn.add(item));
        });
        return Array.from(toReturn).sort();
    }//getCategories

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

    render() {
        return (
            <ElementContext.Provider value={{state: this.state,sort: this.sort,clear: this.clear}}>
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