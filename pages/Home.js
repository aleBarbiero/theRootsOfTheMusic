import React from 'react';
import { Button, View, TouchableHighlight, Image,Text,ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';
import '@expo/match-media';
import {useMediaQuery} from 'react-responsive';
import {Icon} from 'react-native-elements';

function Home({navigation}){

    const isSmall = useMediaQuery({
        maxDeviceWidth: 500
    })

    const isMedium = useMediaQuery({
        maxDeviceWidth: 800
    })

    var isSmartphone;

    if(isSmall)
        isSmartphone = 16;
    else if(isMedium)
        isSmartphone = 30;
    else 
        isSmartphone = 40;

    if(isSmall){
        return (
            <ScrollView>
                <Image source={require('../assets/logo.png')} style={{transform: [{scale: 0.6}], margin: -20,alignSelf: "center"}}></Image>
                <View style={{flexDirection:"row",marginTop:-65,marginBottom:30,alignSelf:"center",padding:0}}>
                    <Icon reverse name="ios-musical-notes" type="ionicon" color="#222" onPress={() => navigation.navigate("Forms",{navigation: navigation,type: true})}></Icon>
                    <View style={{width:20}}></View>
                    <Icon reverse name="ios-list" type="ionicon" onPress={() => navigation.navigate("Forms",{navigation: navigation,type: false})}></Icon>
                </View>
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
        );
    }else if(isMedium){
        return (
            <ScrollView>
                <Image source={require('../assets/logo.png')} style={{transform: [{scale: 0.8}],margin: 10,alignSelf: "center"}}></Image>
                <View style={{flexDirection:"row",marginTop:-65,marginBottom:30,alignSelf:"center",padding:0}}>
                    <Icon reverse name="ios-musical-notes" type="ionicon" color="#222" onPress={() => navigation.navigate("Forms",{navigation: navigation,type: true})}></Icon>
                    <View style={{width:20}}></View>
                    <Icon reverse name="ios-list" type="ionicon" onPress={() => navigation.navigate("Forms",{navigation: navigation,type: false})}></Icon>
                </View>
                <TouchableHighlight style={{
                            width:300,
                            marginTop: -20,
                            alignSelf: "center"
                        }}>
                    <Text onPress={() => navigation.navigate("Scalette",{navigation: navigation,isSmartphone: isSmartphone})} style={styles.mediumText}>Scalette</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{
                    width: 300,
                    marginTop: 25,
                    alignSelf: "center"
                }}>
                    <Text onPress={() => {navigation.navigate("Canzoni",{navigation: navigation,isSmartphone: isSmartphone})}} style={styles.mediumText}>Canzoni</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{
                    width: 300,
                    marginTop: 25,
                    alignSelf: "center"
                }}>
                    <Text onPress={() => navigation.navigate("Categorie",{navigation: navigation,isSmartphone: isSmartphone})} style={styles.mediumText}>Categorie</Text>
                </TouchableHighlight>
            </ScrollView>
        )
    }else{
        return (
            <ScrollView>
                <Image source={require('../assets/logo.png')} style={{transform: [{scale: 1.2}],margin: 150,alignSelf: "center"}}></Image>
                <View style={{flexDirection:"row",marginTop:-65,marginBottom:30,alignSelf:"center",padding:0}}>
                    <Icon reverse name="ios-musical-notes" type="ionicon" color="#222" onPress={() => navigation.navigate("Forms",{navigation: navigation,type: true})}></Icon>
                    <View style={{width:20}}></View>
                    <Icon reverse name="ios-list" type="ionicon" onPress={() => navigation.navigate("Forms",{navigation: navigation,type: false})}></Icon>
                </View>
                <TouchableHighlight style={{
                            width:400,
                            marginTop: -50,
                            alignSelf: "center"
                        }}>
                    <Text onPress={() => navigation.navigate("Scalette",{navigation: navigation,isSmartphone: isSmartphone})} style={styles.tabletText}>Scalette</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{
                    width: 400,
                    marginTop: 25,
                    alignSelf: "center"
                }}>
                    <Text onPress={() => {navigation.navigate("Canzoni",{navigation: navigation,isSmartphone: isSmartphone})}} style={styles.tabletText}>Canzoni</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{
                    width: 400,
                    marginTop: 25,
                    alignSelf: "center"
                }}>
                    <Text onPress={() => navigation.navigate("Categorie",{navigation: navigation,isSmartphone: isSmartphone})} style={styles.tabletText}>Categorie</Text>
                </TouchableHighlight>
            </ScrollView>
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
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white'
      },
});