import React from 'react';
import { Button, View, TouchableHighlight, Image,Text} from 'react-native';
import {StyleSheet} from 'react-native';
import '@expo/match-media';
import {useMediaQuery} from 'react-responsive';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

action = (navigation) => {
    return(
        <ActionButton buttonColor="rgba(34, 34, 34, 1)" offsetY={0}>
            <ActionButton.Item buttonColor='#ff8a01' title="Nuova canzone" onPress={() => navigation.navigate("Forms",{navigation: navigation,type: true})}>
                <Icon name="md-musical-note" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#ff8a01' title="Nuova scaletta" onPress={() => navigation.navigate("Forms",{navigation: navigation,type: false})}>
                <Icon name="md-list" style={styles.actionButtonIcon} />
            </ActionButton.Item>
        </ActionButton>        
    )
}

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
            <View style={styles.view}>
                <Image source={require('../assets/logo.png')} style={{transform: [{scale: 0.6}], margin: -20}}></Image>
                <TouchableHighlight style={{
                            width:200,
                            marginTop: -10,
                        }}>
                    <Button title="Scalette" color="#ff8a01" onPress={() => navigation.navigate("Scalette",{navigation: navigation,isSmartphone: isSmartphone})}></Button>
                </TouchableHighlight>
                <TouchableHighlight style={{
                    width: 200,
                    marginTop: 25
                }}>
                    <Button title="Canzoni" color="#ff8a01" onPress={() => navigation.navigate("Canzoni",{navigation: navigation,isSmartphone: isSmartphone})}></Button>
                </TouchableHighlight>
                <TouchableHighlight style={{
                    width: 200,
                    marginTop: 25
                }}>
                    <Button title="Categorie" color="#ff8a01" onPress={() => navigation.navigate("Categorie",{navigation: navigation,isSmartphone: isSmartphone})}></Button>
                </TouchableHighlight>
                {this.action(navigation)}
            </View>
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
                {this.action()}
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
                {this.action()}
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
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white'
      },
});