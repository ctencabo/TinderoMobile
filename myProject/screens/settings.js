import React, { Component } from 'react';
import {
    Slider,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { globalStyles } from '../styles/global';
import TagView from '../components/TagView';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    render() {
        const { container } = globalStyles;
        const tags = [
            'Spicy',
            'Sweet',
            'Fast-food',
            'Fusion',
            'Korean',
            'Fried',
            'Steamed',
            'Souped',
            'Flavored',
        ]
        const selected = []

        return (
            <View style = {container}>
                <View style = {styles.container}>
                    <Text style = {globalStyles.titleText}>Location Distance:</Text>
                    <Text style = {globalStyles.text}>{this.state.value} km</Text>
                    <Slider 
                        style         = {{width  :  200, height: 40}}
                        minimumValue  = {0}
                        maximumValue  = {50}
                        step          = {1}
                        onValueChange = {(value) => {
                            this.setState({ value: value})
                        }}
                    />
                </View>
                <Text style = {[globalStyles.titleText, styles.titleText]}>Eat me, eat me, eat me up</Text>
                <TagView
                    all         = {tags}
                    selected    = {selected}
                    isExclusive = {false}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        alignSelf: 'center'
    }
})


export default Settings;