import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Colors from '../colors';

import Main from './main';
import Stack from './stack';

export const recentNavState = [];

function trackStateChange(state) {
  const curRoute = state.routes[state.index];
  recentNavState.push(curRoute);
  while (recentNavState.length > 100) {
    recentNavState.shift();
  }
  //TODO: Log current screen to crashlytics
}
export default function Navigation() {
  return (
    <NavigationContainer onStateChange={trackStateChange}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.dark2,
            shadowColor: 'transparent',
          },
          headerBackTitleVisible: false,
          headerTintColor: Colors.light1,
          headerTitleStyle: {
            fontSize: 24,
            color: Colors.light1,
          },
        }}>
        {Main}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
