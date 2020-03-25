import React from 'react';
import { 
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import LoginOrCreateForm from '../common/LoginOrCreateForm';


export default function LandingPage() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LoginOrCreateForm />
        </TouchableWithoutFeedback>
    );
}
