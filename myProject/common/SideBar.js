import React, { Component } from 'react';
import { 
    SafeAreaView,
    StyleSheet,
    Text
} from 'react-native';

import { 
    Left, 
    Right, 
    List, 
    ListItem, 
    Icon 
} from 'native-base';

import { Actions } from 'react-native-router-flux';

import { globalStyles } from '../styles/global';

class SideBar extends Component {
    render() {

        const { text, lato } = globalStyles;
        const { color } = styles;

        return (
            <SafeAreaView style={{backgroundColor:'#e1e9ef', height:'100%'}}>
                <List>
                    <ListItem onPress={() => Actions.home()}>
                        <Left>
                            <Text style = {[text,color,lato]}>Home</Text>
                        </Left>
                        <Right >
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>

                    <ListItem>
                        <Left>
                            <Text style = {[text,color,lato]}>Profile</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>

                    <ListItem onPress={() => Actions.settings()}>
                        <Left>
                            <Text style = {[text,color,lato]}>Settings</Text>
                        </Left>
                        <Right >
                            <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>

                    <ListItem onPress={() => Actions.landingpage()}>
                        <Left>
                            <Text style = {[text,color,lato]}>Logout</Text>
                        </Left>
                        <Right >
                            <Icon name="arrow-back" />
                        </Right>
                    </ListItem>

                </List>
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    color: {
        color: '#EF6B00'
    }
})

export default SideBar