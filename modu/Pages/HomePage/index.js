import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllCircle from './allCircle';
import MyCircle from './myCircle';

const Tab = createMaterialTopTabNavigator();

// dummy data
const allCircles = [
  { 
    name: "EOS",
    logo: '../../images/logo_eos'
  }, 
  {
    name: "ALOHA",
    logo: '../../images/logo_aloha'
  },
  {
    name: "ICEWALL",
    logo: '../../images/logo_icewall'
  },
  {
    name: "HAI",
    logo: '../../images/logo_hai'
  },
  {
    name: "OOPARTS",
    logo: '../../images/logo_ooparts'
  },
  {
    name: "MDBB",
    logo: '../../images/logo_mdbb'
   },
   {
     name: "몽쉘통통",
     logo: '../../images/logo_mong'
   }];
const myCircles = [
  {
    name: "EOS",
    logo: '../../images/logo_eos'
  },
  {
    name: "ICEWALL",
    logo: '../../images/logo_icewall'
  }];

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