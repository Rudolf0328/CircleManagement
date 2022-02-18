import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import colors from '../../constants/colors';

export default CardView = (props) => {
  return (
    <View style={styles.card}>
      <Text>{props.circleName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    // flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // marginLeft: 10,
    // marginRight: 10,
    width: 250,
    height: 300,
    shadowOffset: {
      width:3,
      height:3
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,

    // shadow: {
    //   ...Platform.select({
    //     ios: {
    //       shadowColor: '#4d4d4d',
    //       shadowOffset: { width: 8, height: 8 },
    //       shadowOpacity: 0.3, shadowRadius: 4,
    //     },
    //     android: {
    //       elevation: 8
    //     }
    //   })
    // }
  }
});
