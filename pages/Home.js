import React from 'react';
import { Button, View, TouchableHighlight, Image,Text} from 'react-native';
import {StyleSheet} from 'react-native';

function Home({navigation}){
    return (
        <View style={styles.view}>
            <Text style={styles.title}>Benvenuto!</Text>
            <Image source={require('../assets/splash.png')} style={{scaleX: 0.3, scaleY:0.3, margin: -100}}></Image>
            <TouchableHighlight style={{
                        width:200,
                        marginTop: -150,
                    }}>
                <Button title="Cerca una scaletta" color="#ff8a01"></Button>
            </TouchableHighlight>
            <TouchableHighlight style={{
                width: 200,
                marginTop: 25
            }}>
                <Button title="Cerca una canzone" color="#ff8a01" onPress={() => navigation.navigate("Lista canzoni")}></Button>
            </TouchableHighlight>
            <TouchableHighlight style={{
                width: 200,
                marginTop: 25
            }}>
                <Button title="Cerca per categorie" color="#ff8a01" onPress={() => navigation.navigate("Categorie")}></Button>
            </TouchableHighlight>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    view: { 
        alignItems: 'center'
    },
    title: {
        alignContent: "center",
        top: 100,
        fontSize: 50,
        fontFamily: "Roboto"
    }
});