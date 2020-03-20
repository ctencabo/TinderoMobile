import React from 'react';
import {
    Scene,
    Stack,
    Router
} from 'react-native-router-flux';
import LandingPage from '../screens/landingpage';
import Signup from '../screens/signup';

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
                        // hideNavBar = {true}
                    />
                    <Scene
                        key        = 'signup'
                        component  = {Signup}
                        title      = 'Register'
                        // hideNavBar = {true}
                    />
                </Stack>
                {/* <Stack
                    key='main'
                >

                </Stack> */}
            </Stack>
        </Router>
    )
}