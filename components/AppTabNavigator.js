//edited
import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Enter from '../screens/Enter';
import Readings from '../screens/Readings';


export const AppTabNavigator = createBottomTabNavigator({
  Readings : {
    screen: Readings,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Readings",
    }
  },
  Enter: {
    screen: Enter,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Enter",
    }
  }
});
