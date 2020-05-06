import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { globalStyles } from '../styles/global';

class Card extends Component {

    render() {
        const { image, overlay, header, footer, name, tags } = styles;
        const { lato } = globalStyles;

        return (
            <View style = {StyleSheet.absoluteFill} >
                <Image style = { image } source = {this.props.image} />
                <View style = { overlay } >
                    <View style = { header } >
                        {/* TO-DO */}
                    </View>
                    <View style = { footer } >
                        {/* TO-DO */}
                        <Text style={ [name, lato] }>{this.props.name}</Text>
                        <Text style={ [name, tags, lato] }>Tags: {this.props.tags}</Text>
                    </View>
                </View>
            </View>
        )        
    }
}

const styles = StyleSheet.create({
    image: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        borderRadius: 8,
    },
    overlay: {
        flex: 1,
        justifyContent: "space-between",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    footer: {
        flexDirection: "column",
        backgroundColor: 'rgba(0,0,0,.6)',
        paddingTop: 10,
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8,
    },
    name: {
        color: "white",
        fontSize: 32,
        paddingLeft: 10,
        opacity: 1
    },
    tags: {
        fontSize: 12,
        paddingBottom: 10,
    },
})

export default Card;