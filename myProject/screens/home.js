import React, { Component } from 'react';
import { View, Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import { Feather as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import SwipeCards from 'react-native-swipe-cards';
import Card from '../common/Card';

const { width, height } = Dimensions.get("window");
// const φ = (1 + Math.sqrt(5)) / 2;
const w = width - 36;
// const h = w * φ;
const h = height - 250;


class Home extends Component {
    state = {
        cards: [
            {name: "Any Song", image: '../assets/image/Zico-Any-song.jpg'},
        ]
    }

    handleYup (card) {
        console.log(`Yup for ${card.name}`);
    }

    handleNope (card) {
        console.log(`Nope for ${card.name}`);
    }


    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <View style = {styles.deck}>
                    <SwipeCards 
                        cards      = {this.state.cards}
                        renderCard = {(cardData) => {
                            return (
                                <View style = {styles.cards}>
                                    < Card {...cardData}/>
                                </View>
                            )
                        }}
                        handleYup  = {this.handleYup}
                        handleNope = {this.handleNope}
                    />
                </View>                
                <View style={styles.footer}>
                    <TouchableOpacity 
                        style   = {styles.circle}
                        onPress = {this.handleYup}
                    >
                        <Icon name="x" size={32} color="#ec5288" />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style   = {styles.circle}
                        onPress = {this.handleNope}
                    >
                        <Icon name="heart" size={32} color="#6ee3b4" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }

    dislikeHandler() {
        console.log("Dislike!");
    }

    likeHandler() {
        console.log("Like!");
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fbfaff",
        justifyContent: "space-evenly",
    },
    deck: {
        flex: 4,
        width: w,
        height: h,
        marginLeft: 18,
        marginTop: 100,
    },
    cards: {
        width: w,
        height: h,
    },
    footer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 75,
        padding: 16,
    },
    circle: {
        width: 64,
        height: 64,
        borderRadius: 32,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        shadowColor: "gray",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.18,
        shadowRadius: 2,
    },
})

export default Home;