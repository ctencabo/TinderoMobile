import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    View
} from 'react-native';
import { FontAwesome as Icon } from "@expo/vector-icons";
import TagInput from 'react-native-tags-input';

const mainColor = '#3ca897';

class Settings extends Component {

    state = {
        tags: {
            tag: '',
            tagArray: [],
        },
        tagsColor: mainColor,
        tagsText: '#fff',
    }

    updateTagState = (state) => {
        this.setState({
            tags: state
        })
    }

    render() {
        return (
            <View style = {styles.container}>
                <TagInput
                    updateState               = {this.updateTagState}
                    tags                      = {this.state.tags}
                    placeholder               = "Tags..."                            
                    label                     = 'Press enter to add a tag'
                    labelStyle                = {{color : '#fff'}}
                    leftElement               = {<Icon 
                                                    name  = "tags"
                                                    color = {this.state.tagsText}
                                                />}
                    leftElementContainerStyle = {{marginLeft : 3}}
                    containerStyle            = {{width : (Dimensions.get('window').width - 40)}}
                    inputContainerStyle       = {[styles.textInput, {backgroundColor : this.state.tagsColor}]}
                    inputStyle                = {{color : this.state.tagsText}}
                    onFocus                   = {() => this.setState({tagsColor: '#fff', tagsText: mainColor})}
                    onBlur                    = {() => this.setState({tagsColor: mainColor, tagsText: '#fff'})}
                    autoCorrect               = {false}
                    tagStyle                  = {styles.tag}
                    tagTextStyle              = {styles.tagText}
                    keysForTag                = {', '}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: mainColor,
    },
    textInput: {
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 8,
        borderRadius: 5,
        padding: 3,
    },
    tag: {
        backgroundColor: '#fff'
    },
    tagText: {
        color: mainColor
    },
})

export default Settings;