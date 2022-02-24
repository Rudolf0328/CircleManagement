import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const Circle = (props) => {
  const logo = '../../images/logo_' + props.circleName + '.jpg';
  console.log(logo)
  return (<View style={style.container}>
    <TouchableHighlight style={style.imageShadow}>
      <Image source={require('../../images/logo_eos.jpg')} style={style.image}></Image>
    </TouchableHighlight>
    <Text style={style.text}>{props.circleName}</Text>
  </View>);
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: 'transparent',
    // borderColor: '#000',
    // borderWidth: 1,
    width: '40%',
    height: 150,
    padding: 10,
    // shadowOffset: {
    //   width:3,
    //   height:3
    // },
    // shadowOpacity: 0.1,
    // // shadowRadius: 10,
    
    // borderRadius: 30,
    // shadowColor: '#808080'
  },
  imageShadow: {
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 50,
  },
  text: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
    // alignContent: 'center'
    // flex: 1
  }
})

export default Circle;