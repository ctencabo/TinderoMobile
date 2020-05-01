import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class TagButton extends Component {

    makeStyles() {
        return StyleSheet.create({
            view: {
                flexDirection: 'row',
                borderRadius: 23,
                borderColor: this.props.borderColor,
                borderWidth: 2,
                backgroundColor: this.props.backgroundColor,
                height: 46,
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: 16,
                paddingRight: 16
            },
            touchable: {
                marginLeft: 4,
                marginRight: 4,
                marginBottom: 8
            },
            text: {
                fontSize: 18,
                textAlign: 'center',
                color: this.props.textColor,
                fontSize: 16
            }
        });
    }

    render() {
        const styles = this.makeStyles();

        return (
            <TouchableOpacity style = {styles.touchable }>
                <View style = { styles.view }>
                    <Text style = { styles.text }>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default TagButton;