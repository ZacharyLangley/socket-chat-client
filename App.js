import React from 'react';
import { YellowBox } from 'react-native';
import HomeScreen from './screens/HomeScreen';

console.ignoredYellowBox = ['Remote Debugger'];
YellowBox.ignoreWarnings([])

export default App = () => {
  return (
    <HomeScreen />
  );
}
