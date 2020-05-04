import React, { Component } from 'react';
import { View,
        StyleSheet,
        Image,
        StatusBar 
} from 'react-native';
import {  TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { Actions } from 'react-native-router-flux';

class Header extends Component{
    // renderLeftComponent() {

    // }


    // renderLogo() {
    //     return (
    //         <Image 
    //             style = {styles.headerImage} 
    //             resizeMode = "contain"
    //             source = {require('../assets/images/logo.png')} 
    //         />
    //     )
    // }

    // renderRightComponent() {
    //     return (
    //         <TouchableWithoutFeedback>
    //             <Text style = {styles.text}>Settings</Text>
    //         </TouchableWithoutFeedback>
    //     )
    // }

    render() {
        return(
            <View style = {styles.backgroundStyle}>
                <StatusBar />
                <View style = {styles.header}>
                    <TouchableOpacity onPress={() => Actions.drawerToggle()}>
                        <Icon 
                            name  = "menu" 
                            size  = {32} 
                            color = "#EF6B00" 
                            style = {styles.icon}
                        />
                    </TouchableOpacity>
                    <Image 
                        style = {styles.headerImage} 
                        resizeMode = "contain"
                        source = {require('../assets/images/logo.png')} 
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        // justifyContent: 'flex-start',
        padding: 16,
        marginTop: 16,
    },
    backgroundStyle: {
        backgroundColor: '#e1e9ef',
    },
    headerImage: {
        flex: 1,
        width: 150,
        height: 40,
    },
    icon: {
        paddingTop:10
    },
})

export default Header;