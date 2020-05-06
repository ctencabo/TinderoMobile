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
            value           : 5,
            currentLongitude: 'unknown',
            currentLatitude : 'unknown',
        }
    }

    componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(

        position => {
            const currentLongitude = JSON.stringify(position.coords.longitude);
            const currentLatitude = JSON.stringify(position.coords.latitude);
            
            this.setState({ currentLongitude: currentLongitude });
            this.setState({ currentLatitude: currentLatitude });
        },

        error => alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )

        this.watchID = navigator.geolocation.watchPosition(position => {
            console.log(position);

            const currentLongitude = JSON.stringify(position.coords.longitude);
            const currentLatitude = JSON.stringify(position.coords.latitude);
            
            this.setState({ currentLongitude: currentLongitude });
            this.setState({ currentLatitude: currentLatitude });
        })
    }

    render() {
        const { container, lato } = globalStyles;
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
                    <View style = {{marginBottom: 20, padding: 5}}>
                        <Text style = {globalStyles.titleText}>You are here:</Text>
                        <Text style = {globalStyles.text}>Latitude: {this.state.currentLatitude}</Text>
                        <Text style = {globalStyles.text}>Longitude: {this.state.currentLongitude}</Text>
                    </View>                    
                    <Text style = {globalStyles.titleText}>Location Distance:</Text>
                    <Text style = {globalStyles.text}>{this.state.value} km</Text>
                    <Slider 
                        style         = {{width  :  200, height: 40}}
                        minimumValue  = {5}
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