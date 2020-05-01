import React from 'react';
import { 
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import LoginOrCreateForm from '../components/LoginOrCreateForm';


export default function LandingPage() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LoginOrCreateForm />
        </TouchableWithoutFeedback>
    );
}
