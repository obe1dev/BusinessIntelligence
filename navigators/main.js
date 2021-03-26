import React from 'react';
import {StatusBar} from 'react-native';
import {Screen} from './stack';

StatusBar.setBarStyle('light-content');

// Import all screens
import Businesses from '../screens/Businesses';
import BusinessDetail from '../screens/BusinessDetail';

//  I like this structure to consolidate and setup the screens.
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

// also If I wanted to add a HOC Like a toast I could do it here.
// accept another component as an argument. And will return a new component.

export default screens.map((s) => <Screen key={s.name} {...s} />);

// export const withToasts = (Component) => {
//   const Wrapped = props => (
//     <ToastWrapper>
//       <Component {...props} />
//     </ToastWrapper>
//   );
//   return Wrapped;
// };
