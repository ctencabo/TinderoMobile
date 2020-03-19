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
import { globalStyles } from '../styles/global';
import { Actions } from 'react-native-router-flux';

export default function Signup() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.container}>
                <View style={styles.form}>
                    <Text style={[globalStyles.titleText, styles.titleText]}>Register</Text>
                    <TextInput 
                        style       = {[globalStyles.input, styles.formInput]}
                        placeholder = "Username"
                    />
                    <TextInput 
                        style           = {[globalStyles.input, styles.formInput]}
                        secureTextEntry = {true}
                        placeholder     = "Password"
                    />
                    <TextInput 
                        style           = {[globalStyles.input, styles.formInput]}
                        secureTextEntry = {true}
                        placeholder     = "Confirm Password"
                    />
                    <TouchableOpacity 
                        style   = {[globalStyles.button, styles.signupButton]}
                        onPress = {() => signupHandler()}
                    >
                        <Text style={[globalStyles.text, styles.signupText]}>Signup</Text>        
                    </TouchableOpacity>
                </View>
                <View style={styles.loginTextCont}>
                    <Text style={globalStyles.text}>Already have an account?</Text>
                    <TouchableOpacity onPress={loginHandler}>
                        <Text style={[globalStyles.text, styles.loginText]}>Log-in</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

function signupHandler() {
    console.log('CLICKED!!!');
}

function loginHandler() {
    Actions.landingpage();
}

const styles = StyleSheet.create({
    form: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    loginTextCont: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 16
    },

    formInput: {
        borderWidth: 0,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '70%',
        borderRadius: 25,
        fontSize: 16,
        margin: 10,
        paddingHorizontal: 20,
        paddingVertical: 8,
        color: 'black'
    },

    signupButton: {
        marginTop: 20,
        borderColor: 'transparent',
        backgroundColor: '#ef6b00',
        width: '70%',
        borderRadius: 25,
    },

    titleText: {
        marginBottom: 50,
        fontSize: 60,
        color: '#ef6b00'
    },

    signupText: {
        color: 'white',
        fontWeight: "bold",
        alignSelf: 'center'
    },

    loginText: {
        fontWeight: 'bold',
        color: '#ef6b00'
    },
})