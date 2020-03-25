import React from 'react';
import { 
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import LoginOrCreateForm from '../common/LoginOrCreateForm';

export default function Signup() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LoginOrCreateForm create/>
        </TouchableWithoutFeedback>
    )
}