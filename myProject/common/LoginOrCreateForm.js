import React, { Component } from 'react';
import { 
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { globalStyles } from '../styles/global';

class LoginOrCreateForm extends Component {
    state = {
        username: '',
        password: '',
        confirmPassword: ''
    }

    onUsernameChange(text) {
        this.setState({ username: text });
    }

    onPasswordChange(text) {
        this.setState({ password: text });
    }

    onConfirmPasswordChange(text) {
        this.setState({ confirmPassword: text });
    }

    renderCreateLogo() {
        const { titleText }        = globalStyles;
        const { logo, centerText } = styles;

        if(!this.props.create) {
            return (
                <View style={logo}>
                    <Image
                        style      = {{ width: 300, height: 300}} 
                        resizeMode = "contain"
                        source     = {require("../assets/logo.png")}
                    />
                </View>
            )
        } else {
            return (
                <View style={logo}>
                    <Text style={[titleText, centerText]}>Register</Text>
                </View>
            )            
        }
    }

    renderCreateForm() {
        const { input }      = globalStyles;
        const { formInput } = styles;

        if( this.props.create ) {
            return (
                <TextInput 
                    style           = {[input, formInput]}
                    secureTextEntry = {true}
                    placeholder     = "Confirm Password"
                    onChangeText    = {this.onConfirmPasswordChange.bind(this)}
                />
            )            
        }
    }

    renderButton() {
        const buttonText = this.props.create ? 'Sign-up': 'Log-in';
        const { 
            button,
            text
        } = globalStyles;
        const { 
            loginButton,
            loginText
        } = styles;

        return (
            <View>
                <TouchableOpacity 
                    style   = {[button, loginButton]}
                    onPress = {this.handleRequest.bind(this)}
                >
                    <Text style={[text, loginText]}>{buttonText}</Text>        
                </TouchableOpacity>
            </View>
        )
    }

    renderCreateLink() {
        const { footer, footerText } = styles;
        const { text } = globalStyles;
        const upperText = this.props.create ? 'Already have an account?' : 'Dont have an account yet?';
        const bottomText = this.props.create ? 'Log-in' : 'Sign-up';

        return (
            <View style={footer}>
                <Text style={text}>{upperText}</Text>
                <TouchableOpacity onPress={this.submitHandler.bind(this)}>
                    <Text style={[text, footerText]}>{bottomText}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    handleRequest() {
        const endpoint = this.props.create ? 'register' : 'login';
        const payload = { 
            username: this.state.username,
            password: this.state.password   
        }

        if( this.props.create ) {
            payload.confirmPassword = this.state.confirmPassword;
        }

        axios
            .post(`/auth/${endpoint}/`, payload)
            .then(Response => {
                const { token, user } = response.data;

                axios.defaults.headers.common.Authorization = `Token ${token}`;

                Actions.main()
            })
            .catch(error => console.log(error));
    }

    submitHandler() {
        if(this.props.create) {
            Actions.landingpage();
        } else {
            Actions.signup();
        }
    }

    render() {
        const { auth, loginInput, formInput } = styles;
        const { input, container } = globalStyles;
        const inputStyles = this.props.create ? [input, formInput] : [input, loginInput];

        return (
            <View style={container}>
                {this.renderCreateLogo()}
                <View style={auth}>
                    <TextInput 
                        style       = {inputStyles}
                        placeholder = "Username"
                    />
                    <TextInput 
                        style           = {inputStyles}
                        secureTextEntry = {true}
                        placeholder     = "Password"
                    />
                    {this.renderCreateForm()}
                    {this.renderButton()}
                </View>
                {this.renderCreateLink()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        paddingTop: 80,
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    auth: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    footer: {
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
        width: 300,
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

    loginText: {
        color: 'white',
        fontWeight: "bold"
    },

    footerText: {
        fontWeight: 'bold',
        color: '#ef6b00'
    },

    centerText: {
        marginBottom: 50,
        fontSize: 60,
        color: '#ef6b00'
    },
});

export default LoginOrCreateForm;