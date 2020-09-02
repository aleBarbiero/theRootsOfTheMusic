import React from 'react';
import { Button, View, TouchableHighlight, Image} from 'react-native';
import {StyleSheet} from 'react-native';

function Home({navigation}){
    return (
        <View style={styles.view}>
            <Image source={require('../assets/logo.png')} style={{transform: [{scale: 0.5}], margin: -20}}></Image>
            <TouchableHighlight style={{
                        width:200,
                        marginTop: -10,
                    }}>
                <Button title="Scalette" color="#ff8a01"></Button>
            </TouchableHighlight>
            <TouchableHighlight style={{
                width: 200,
                marginTop: 25
            }}>
                <Button title="Canzoni" color="#ff8a01" onPress={() => navigation.navigate("Canzoni",{navigation: navigation})}></Button>
            </TouchableHighlight>
            <TouchableHighlight style={{
                width: 200,
                marginTop: 25
            }}>
                <Button title="Categorie" color="#ff8a01" onPress={() => navigation.navigate("Categorie")}></Button>
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