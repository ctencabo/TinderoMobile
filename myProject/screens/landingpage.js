import React from 'react';
import { 
    StyleSheet, 
    Text,
    TextInput,
    View,
    Image, 
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { globalStyles } from '../styles/global';


export default function LandingPage() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.container}>
                <View style={styles.logo}>
                    <Image
                        style      = {{ width: 300, height: 300}} 
                        resizeMode = "contain"
                        source     = {require("../assets/logo.png")}
                    />
                </View>
                <View style={styles.auth}>
                    <TextInput 
                        style       = {[globalStyles.input, styles.loginInput]}
                        placeholder = "Username"
                    />
                    <TextInput 
                        style           = {[globalStyles.input, styles.loginInput]}
                        secureTextEntry = {true}
                        placeholder     = "Password"
                    />
                    <TouchableOpacity 
                        style   = {[globalStyles.button, styles.loginButton]}
                        onPress = {() => loginHandler()}
                    >
                        <Text style={[globalStyles.text, styles.loginText]}>Log-in</Text>        
                    </TouchableOpacity>
                </View>
                <View style={styles.signupTextCont}>
                    <Text style={globalStyles.text}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={signupHandler}>
                        <Text style={[globalStyles.text, styles.signupText]}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

function loginHandler(){
    console.log("Clicked")
}

function signupHandler(){
    Actions.signup()
}

const styles = StyleSheet.create({
    logo: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    auth: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    signupTextCont: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 16
    },

    signupText: {
        fontWeight: 'bold',
        color: '#ef6b00'
    },

    loginButton: {
        borderColor: 'transparent',
        backgroundColor: '#ef6b00',
        width: '70%',
        borderRadius: 25,
    },

    loginInput: {
        width: '70%',
        borderRadius: 25,
        fontSize: 16,
        margin: 10,
        paddingHorizontal: 16,
        paddingVertical: 8,
        color: 'black'
    },

    loginText: {
        color: 'white',
        fontWeight: "bold"
    }
});
