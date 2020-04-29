import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

class Card extends Component {

    render() {
        return (
            <View style = {StyleSheet.absoluteFill} >
                <Image style = { styles.image } source = {require('../assets/images/Zico-Any-song.jpg')} />
                <View style = { styles.overlay } >
                    <View style = { styles.header } >
                        {/* TO-DO */}
                    </View>
                    <View style = { styles.footer } >
                        {/* TO-DO */}
                        <Text style={ styles.name }>{this.props.name}</Text>
                        <Text style={ styles.tags }>Tags: Any, Song, Hip-hop</Text>
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
        padding: 16,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    footer: {
        flexDirection: "column",
    },
    name: {
        color: "white",
        fontSize: 32,
    },
    tags: {
        color: "white",
        fontSize: 12,
    },
})

export default Card;