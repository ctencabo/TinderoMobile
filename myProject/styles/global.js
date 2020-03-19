import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
        fontFamily: 'lato-bold',
        color: 'black',
        fontSize: 24
    },

    text: {
        fontFamily: 'lato',
        color: 'black',
        fontSize: 16
    },
})