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
        const selected = []
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

        return (
            <View style = {container}>
                <TagView
                    all         = {tags}
                    selected    = {selected}
                    isExclusive = {false}
                />
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
                
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default Settings;