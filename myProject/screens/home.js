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
            {
                key: "0",   
                name: "Any Song", 
                tags: "Any, Song, Hip-hop",
                image: require("../assets/images/Zico-Any-song.jpg")
            },
            {   
                key: "1",
                name: "Feel Special", 
                tags: "Twicepop, RnB, Dance",
                image: require("../assets/images/feelspecial.jpg")
            },
            {   
                key: "2",
                name: "I Want You Back", 
                tags: "Twicepop, Cover, Jackson 5",
                image: require("../assets/images/iwantyouback.jpg")
            },
            {   
                key: "3",
                name: "Signal", 
                tags: "Twicepop, Aliens, SOTY2017",
                image: require("../assets/images/signal.jpg")
            },
            {   
                key: "4",
                name: "Likey", 
                tags: "Twicepop, Social Media, Canada",
                image: require("../assets/images/twicetagram.jpg")
            },
            {   
                key: "5",
                name: "TT", 
                tags: "Twicepop, Horror, Cosplaying",
                image: require("../assets/images/TT.png")
            },
            {   
                key: "6",
                name: "What is Love", 
                tags: "Twicepop, Love song, Movies",
                image: require("../assets/images/whatislove.png")
            },
        ],
        outOfCards: false,
    }

    handleYup (card) {
        console.log(`Yup for ${card.name}`);
    }

    handleNope (card) {
        console.log(`Nope for ${card.name}`);
    }

    // TO-DO
    // cardRemoved (index) {
    //     const cards = this.state.cards;
    //     console.log(`The index is ${index}`);
    
    //     if (this.state.cards.length - index <= 3) {
    //       console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);
    
    //         if (!this.state.outOfCards) {
    //             console.log(`Adding ${cards.length} more cards`)
        
    //             this.setState({
    //                 cards: this.state.cards.concat(cards),
    //                 outOfCards: true
    //             })
    //         }
    //     } else if (this.state.outOfCards){ 
    //         this.setState({
    //             outOfCards: false
    //         })
    //     }
    
    //   }


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
                        handleYup        = {this.handleYup}
                        handleNope       = {this.handleNope}
                        stack            = {true}
                        stackOffsetX     = {0}
                        smoothTransition = {true}
                        loop             = {true}
                        // cardRemoved      = {this.cardRemoved.bind(this)}
                    />
                </View>                
                <View style={styles.footer}>
                    <TouchableOpacity 
                        style   = {styles.circle}
                        onPress = {this.handleYup}
                    >
                        <Icon name="x" size={24} color="#ec5288" />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style   = {styles.circle}
                        onPress = {this.handleNope}
                    >
                        <Icon name="heart" size={24} color="#6ee3b4" />
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
        marginTop: 50,
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
        width: 48,
        height: 48,
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