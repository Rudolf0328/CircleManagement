import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllCircle from './allCircle';
import MyCircle from './myCircle';

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AllCircle" component={AllCircle}/>
      <Tab.Screen name="MyCircle" component={MyCircle}/>
    </Tab.Navigator>
  );
}

export default function HomePage () {
  return (
    <NavigationContainer>
        <Tabs />
    </NavigationContainer>
  );
}