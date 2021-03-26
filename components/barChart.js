import {requireNativeComponent} from 'react-native';
// requireNativeComponent import the UIView class from the Swift thru Objective-C

// ChartView is the name in the @() decorator.
const Chart = requireNativeComponent('ChartView', null);
export default Chart;

//  I had to create this as a component or this would crash
// if I went back to the list and entered another detail.
