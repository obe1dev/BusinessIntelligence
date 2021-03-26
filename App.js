/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import 'react-native-gesture-handler';
import Navigators from './navigators';
import {Platform, UIManager} from 'react-native';

if (
  // sets up the layout animation.
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

//Benefits you get by using functional components instead:
// 1.Functional component are much easier to read and test
//  because they are plain JavaScript functions
// 2.It has less code which makes it more readable
const App = () => {
  return <Navigators />;
};

export default App;
