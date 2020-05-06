import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },

    input: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white'
    },

    button: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: 'transparent',
        paddingVertical: 8,
        alignItems: 'center',
        height: 45,
        margin: 8,
    },

    titleText: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'lato-bold'
    },

    text: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'lato'
    },

    lato: {
        fontFamily: 'lato'
    },

    latoBold: {
        fontFamily: 'lato-bold'
    }
})