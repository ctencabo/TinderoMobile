import React from 'react';
import {
    Scene,
    Stack,
    Router,
    Drawer
} from 'react-native-router-flux';

import LandingPage from '../screens/landingpage';
import Signup from '../screens/signup';
import Home from '../screens/home';
import Settings from '../screens/settings';

import Header from '../common/Header';
import SideBar from '../common/SideBar';

export default function RouterComponent() {
    return (
        <Router>
            <Stack key='root'>
                <Stack
                    hideNavBar
                    key  = 'auth'
                    type = 'reset'
                >
                    <Scene
                        key        = 'landingpage'
                        component  = {LandingPage}
                    />
                    <Scene
                        key        = 'signup'
                        component  = {Signup}
                    />
                </Stack>
                <Stack
                    navBar = {Header}
                    key  = 'main'
                    type = 'reset'
                >
                    <Drawer
                        hideNavBar
                        open             = {false}
                        type             = "overlay"
                        key              = "drawer"
                        contentComponent = {SideBar}
                        drawerWidth      = {300}
                    >
                        <Scene
                            hideNavBar
                            key       = 'home'
                            component = {Home}
                            initial
                        />
                        <Scene
                            hideNavBar
                            key       = 'settings'
                            component = {Settings}
                        />
                    </Drawer>
                </Stack>
            </Stack>
        </Router>
    )
}