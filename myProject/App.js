import React, { Component } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Router from './routes/router';
import axios from 'axios';

console.disableYellowBox = true;

// export default function App() {
//     const [fontsLoaded, setFontsLoaded] = useState(false);

//     if(fontsLoaded) {
//         return (
//             <Router />
//         );
//     } else {
//         return (
//             <AppLoading 
//             startAsync = {getFonts}
//             onFinish   = {() => setFontsLoaded(true)}
//             />
//         )
//     }
// }

export default class App extends Component {
    // componentWillMount() {
    //     axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
    //     axios.defaults.timeout = 1500;
    // }
    state = {
        fontsLoaded: false
    }

    getFonts = () => Font.loadAsync({
        'lato'     : require('./assets/fonts/Lato-Regular.ttf'),
        'lato-bold': require('./assets/fonts/Lato-Bold.ttf')
    });

    render(){
        if(this.state.fontsLoaded){
            return (
                <Router />
            )
        } else {
            return (
                <AppLoading
                    startAsync = {this.getFonts}
                    onFinish = {() => this.setState({ fontsLoaded: true })}
                />
            )
        }
        
    }
        

}
