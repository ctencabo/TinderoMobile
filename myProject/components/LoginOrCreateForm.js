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
        username : '',
        password : '',
        firstName: '',
        lastName : ''
    }

    onUsernameChange(text) {
        this.setState({ username: text });
    }

    onPasswordChange(text) {
        this.setState({ password: text });
    }

    onFirstNameChange(text) {
        this.setState({ firstName: text });
    }

    onLastNameChange(text) {
        this.setState({ lastName: text});
    }

    renderCreateLogo() {
        const { titleText }                    = globalStyles;
        const { logo, signupLogo, centerText } = styles;
        const logoStyle                        = this.props.create ? signupLogo: logo

        if(!this.props.create) {
            return (
                <View style={logoStyle}>
                    <Image
                        style      = {{ width: 300, height: 300}} 
                        resizeMode = "contain"
                        source     = {require("../assets/images/logo.png")}
                    />
                </View>
            )
        } else {
            return (
                <View style={logoStyle}>
                    <Text style={[titleText, centerText]}>Register</Text>
                </View>
            )            
        }
    }

    renderCreateForm() {
        const { input, lato } = globalStyles;
        const { formInput }   = styles;
        const textInputStyle  = [input, formInput, lato]

        if( this.props.create ) {
            return (
                <View>
                    <TextInput
                        placeholder  = "First Name"
                        autoCorrect  = {false}
                        onChangeText = {this.onFirstNameChange.bind(this)}
                        style        = {textInputStyle}
                    />
                    <TextInput
                        placeholder  = "Last Name"
                        autoCorrect  = {false}
                        onChangeText = {this.onLastNameChange.bind(this)}
                        style        = {textInputStyle}
                    />
                </View>
                
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
        // const endpoint = this.props.create ? 'register' : 'login';
        // const payload = { 
        //     username: this.state.username,
        //     password: this.state.password   
        // }

        // if( this.props.create ) {
        //     payload.first_name = this.state.firstName;
        //     payload.last_name  = this.state.lastName;
        // }

        // axios
        //     .post(`/auth/${endpoint}/`, payload)
        //     .then(Response => {
        //         const { token, user } = response.data;

        //         axios.defaults.headers.common.Authorization = `Token ${token}`;

        //         console.log('Here');

        //         Actions.main()
        //     })
        //     .catch(error => console.log(error));

        if( this.props.create ) {
            Actions.landingpage();
        } else {
            Actions.main();
        }
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
                        style        = {inputStyles}
                        placeholder  = "Username"
                        onChangeText = {this.onUsernameChange.bind(this)}
                    />
                    <TextInput 
                        style           = {inputStyles}
                        secureTextEntry = {true}
                        placeholder     = "Password"
                        onChangeText    = {this.onPasswordChange.bind(this)}
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

    signupLogo: {
        paddingTop: 30,
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
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

    formInput: {
        width: 300,
        borderRadius: 25,
        fontSize: 16,
        margin: 10,
        paddingHorizontal: 16,
        paddingVertical: 8,
        color: 'black'
    },

    loginInput: {
        borderWidth: 0,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 300,
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
        fontWeight: '900',
        color: '#ef6b00'
    },
});

export default LoginOrCreateForm;