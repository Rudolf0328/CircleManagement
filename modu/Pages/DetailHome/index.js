import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import colors from '../../constants/colors';
import { Fonts } from '../../Fonts';
import { DetailCalendar } from './Calendar';
import consts from '../../constants/consts';
import Icon from 'react-native-vector-icons/Ionicons';

const DetailHomePage = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
});

export default DetailHomePage;