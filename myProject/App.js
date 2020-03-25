import React, { Component, useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import RouterComponent from './routes/router';
import axios from 'axios';

const getFonts = () => Font.loadAsync({
    'lato'     : require('./assets/fonts/Lato-Regular.ttf'),
    'lato-bold': require('./assets/fonts/Lato-Bold.ttf')
});

export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    if(fontsLoaded) {
        return (
            <RouterComponent />
        );
    } else {
        return (
            <AppLoading 
            startAsync = {getFonts}
            onFinish   = {() => setFontsLoaded(true)}
            />
        )
    }
}

// class App extends Component {
//   componentWillMount() {
//     axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
//     axios.defaults.timeout = 1500;
//   }

//   state = {
//     fontsLoaded: false,
//     setFontsLoaded: false
//   }

//   getFonts = () => Font.loadAsync({
//     'lato'     : require('./assets/fonts/Lato-Regular.ttf'),
//     'lato-bold': require('./assets/fonts/Lato-Bold.ttf')
//   });

//   render(){
//     if(this.state.fontsLoaded) {
//       return (
//         <RouterComponent />
//       );
//     } else {
//       return (
//         <AppLoading 
//           startAsync = {this.getFonts.bind(this)}
//           onFinish   = {() => {
//             this.setState({ setFontsLoaded: true })
//           }}
//         />
//       )
//     }
//   }
  
// }

// export default App;
