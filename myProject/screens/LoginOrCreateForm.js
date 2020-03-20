import React, { Component } from 'react';
import { 
    View,
    TextInput,
    TouchableOpacity,
    Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';

class LoginOrCreateForm extends Component {
    state = {
        username: '',
        password: ''
    }

    onUsernameChange(text) {
        this.setState({ username: text });
    }

    onPasswordChange(text) {
        this.setState({ password: text });
    }

    render() {
        return (
            <View>
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
        )
    }
}

export default LoginOrCreateForm;