import React from 'react';
import {StatusBar} from 'react-native';
import {Screen} from './stack';

StatusBar.setBarStyle('light-content');

// Import all screens
import Businesses from '../screens/Businesses';
import BusinessDetail from '../screens/BusinessDetail';

const screens = [
  {
    name: 'Home',
    component: Businesses,
    options: {title: 'Businesses'},
  },
  {
    name: 'Profile',
    component: BusinessDetail,
    options: {title: 'Company Details'},
  },
];

// Transform into React Navigation screen
export default screens.map((s) => <Screen key={s.name} {...s} />);
