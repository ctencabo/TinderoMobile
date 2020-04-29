import React from 'react';
import {
    Scene,
    Stack,
    Router
} from 'react-native-router-flux';
import LandingPage from '../screens/landingpage';
import Signup from '../screens/signup';
import Home from '../screens/home';
import Header from '../common/Header';

export default function RouterComponent() {
    return (
        <Router>
            <Stack hideNavBar key='root'>
                <Stack
                    hideNavBar
                    key  = 'auth'
                    type = 'reset'
                >
                    <Scene
                        key        = 'landingpage'
                        component  = {LandingPage}
                        title      = 'Landing Page'
                    />
                    <Scene
                        key        = 'signup'
                        component  = {Signup}
                        title      = 'Register'
                    />
                </Stack>
                <Stack
                    // hideNavBar
                    navBar = {Header}
                    key  = 'main'
                    type = 'reset'
                >
                    <Scene
                        title     = "Home"
                        key       = "home"
                        component = {Home}
                    />
                </Stack>
            </Stack>
        </Router>
    )
}