import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text } from 'react-native';
import colors from '../../constants/colors';
import { Fonts } from '../../Fonts';
import { DetailCalendar } from './Calendar';
import consts from '../../constants/consts';

const DetailHomePage = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.introduce_text}>{props.introduceText}</Text>
        </View>
        <DetailCalendar style={styles.calendar} /> 
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: "stretch",
        justifyContent: "flex-start",
    },
    calendar: {
      flex: 0,
      margin: consts.default_margin,
      flexDirection: "column",
      alignItems: "stretch",
    },
  card: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: consts.default_radius,
    padding:13,
    marginLeft: consts.default_margin,
    marginRight: consts.default_margin,
    marginTop: consts.default_margin,
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 2,
  },
  introduce_text: {
    fontFamily: Fonts.Dohyeon,
    fontSize: 13,
    lineHeight: 25
  }
});

export default DetailHomePage;