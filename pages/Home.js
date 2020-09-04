import React from 'react';
import { Button,ScrollView, View, TouchableHighlight, Image,Text} from 'react-native';
import {StyleSheet} from 'react-native';
import '@expo/match-media';
import {useMediaQuery} from 'react-responsive';

function Home({navigation}){

    const isVerySmall = useMediaQuery({
        maxDeviceWidth: 350
    })

    const isSmall = useMediaQuery({
        maxDeviceWidth: 500
    })

    const isMedium = useMediaQuery({
        maxDeviceWidth: 800
    })

    var isSmartphone;

    if(isVerySmall)
        isSmartphone = 13;
    else if(isSmall)
        isSmartphone = 16;
    else if(isMedium)
        isSmartphone = 30;
    else 
        isSmartphone = 40;

    if(isVerySmall){
        return(
            <ScrollView>
                <Image source={require('../assets/logo.png')} style={{transform: [{scale: 0.4}], margin: -100,alignSelf: "center"}}></Image>
                <TouchableHighlight style={{
                            width:200,
                            marginTop: -10,
                            alignSelf: "center"
                        }}>
                    <Button title="Scalette" color="#ff8a01" onPress={() => navigation.navigate("Scalette",{navigation: navigation,isSmartphone: isSmartphone})}></Button>
                </TouchableHighlight>
                <TouchableHighlight style={{
                    width: 200,
                    marginTop: 25,
                    alignSelf: "center"
                }}>
                    <Button title="Canzoni" color="#ff8a01" onPress={() => navigation.navigate("Canzoni",{navigation: navigation,isSmartphone: isSmartphone})}></Button>
                </TouchableHighlight>
                <TouchableHighlight style={{
                    width: 200,
                    marginTop: 25,
                    alignSelf: "center"
                }}>
                    <Button title="Categorie" color="#ff8a01" onPress={() => navigation.navigate("Categorie",{navigation: navigation,isSmartphone: isSmartphone})}></Button>
                </TouchableHighlight>
            </ScrollView>
        )
    }else if(isSmall){
        return (
            <ScrollView>
                <Image source={require('../assets/logo.png')} style={{transform: [{scale: 0.6}], margin: -50,alignSelf: "center"}}></Image>
                <TouchableHighlight style={{
                            width:200,
                            marginTop: -2,
                            alignSelf: "center"
                        }}>
                    <Button title="Scalette" color="#ff8a01" onPress={() => navigation.navigate("Scalette",{navigation: navigation,isSmartphone: isSmartphone})}></Button>
                </TouchableHighlight>
                <TouchableHighlight style={{
                    width: 200,
                    marginTop: 25,
                    alignSelf: "center"
                }}>
                    <Button title="Canzoni" color="#ff8a01" onPress={() => navigation.navigate("Canzoni",{navigation: navigation,isSmartphone: isSmartphone})}></Button>
                </TouchableHighlight>
                <TouchableHighlight style={{
                    width: 200,
                    marginTop: 25,
                    marginBottom: 2,
                    alignSelf: "center"
                }}>
                    <Button title="Categorie" color="#ff8a01" onPress={() => navigation.navigate("Categorie",{navigation: navigation,isSmartphone: isSmartphone})}></Button>
                </TouchableHighlight>
            </ScrollView>
        );
    }else if(isMedium){
        return (
            <View style={styles.view}>
                <Image source={require('../assets/logo.png')} style={{transform: [{scale: 0.8}],margin: 10}}></Image>
                <TouchableHighlight style={{
                            width:300,
                            marginTop: -20,
                        }}>
                    <Text onPress={() => navigation.navigate("Scalette",{navigation: navigation,isSmartphone: isSmartphone})} style={styles.mediumText}>Scalette</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{
                    width: 300,
                    marginTop: 25
                }}>
                    <Text onPress={() => {navigation.navigate("Canzoni",{navigation: navigation,isSmartphone: isSmartphone})}} style={styles.mediumText}>Canzoni</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{
                    width: 300,
                    marginTop: 25
                }}>
                    <Text onPress={() => navigation.navigate("Categorie",{navigation: navigation,isSmartphone: isSmartphone})} style={styles.mediumText}>Categorie</Text>
                </TouchableHighlight>
            </View>
        )
    }else{
        return (
            <View style={styles.view}>
                <Image source={require('../assets/logo.png')} style={{transform: [{scale: 1.2}],margin: 150}}></Image>
                <TouchableHighlight style={{
                            width:400,
                            marginTop: -50,
                        }}>
                    <Text onPress={() => navigation.navigate("Scalette",{navigation: navigation,isSmartphone: isSmartphone})} style={styles.tabletText}>Scalette</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{
                    width: 400,
                    marginTop: 25
                }}>
                    <Text onPress={() => {navigation.navigate("Canzoni",{navigation: navigation,isSmartphone: isSmartphone})}} style={styles.tabletText}>Canzoni</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{
                    width: 400,
                    marginTop: 25
                }}>
                    <Text onPress={() => navigation.navigate("Categorie",{navigation: navigation,isSmartphone: isSmartphone})} style={styles.tabletText}>Categorie</Text>
                </TouchableHighlight>
            </View>
        )
    }
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
    },
    tabletText: {
        fontSize:40,
        backgroundColor: "#ff8a01",
        textTransform: "uppercase",
        alignSelf: "center",
        paddingLeft: 60,
        fontFamily: "Roboto",
        color: "#fff",
        width: 300
    },
    mediumText: {
        fontSize:35,
        backgroundColor: "#ff8a01",
        textTransform: "uppercase",
        alignSelf: "center",
        paddingLeft: 70,
        fontFamily: "Roboto",
        color: "#fff",
        width: 300
    }
});