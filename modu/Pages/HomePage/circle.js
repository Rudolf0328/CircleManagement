import React from 'react';
import { View, Text } from 'react-native';

const Circle = (props) => {
  return (<View
    style={{
      backgroundColor: '#f9c2ff',
      // padding: 20,
      // marginVertical: 8,
      // marginHorizontal: 16,
      width: '40%',
      paddingBottom: '35%'
      // height: props.width
      // height: ''
    }}>
    <Text style={{color: 'black', fontSize: 14}}>{props.circleName}</Text>
  </View>);
}

export default Circle;