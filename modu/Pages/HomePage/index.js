import React from 'react';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';
import CardView from './card';

const HomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
       <CardView circleName={"동아리 이름"}>
       </CardView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // card: {
  //   backgroundColor: colors.card,
  //   // flex: 1,
  //   borderTopLeftRadius: 30,
  //   borderTopRightRadius: 30,
  //   borderBottomLeftRadius: 30,
  //   borderBottomRightRadius: 30,
  //   // marginLeft: 10,
  //   // marginRight: 10,
  //   width: 250,
  //   height: 250
  // }
});

export default HomePage;