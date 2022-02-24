import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllCircle from './allCircle';
import MyCircle from './myCircle';

const Tab = createMaterialTopTabNavigator();

// dummy data
const allCircles = ["EOS", "ALOHA", "ICEWALL", "HAI", "OOPARTS", "MDBB", "몽쉘통통", "어리버리"];
const myCircles = ["EOS", "ICEWALL"];

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AllCircle" children={() => <AllCircle circles={allCircles}></AllCircle>}/>
      <Tab.Screen name="MyCircle" children={() => <MyCircle circles={myCircles}></MyCircle>}/>
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