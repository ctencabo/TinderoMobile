import React, {useState} from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import RouterComponent from './routes/router';

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
