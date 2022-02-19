import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import colors from '../../constants/colors';
import { Fonts } from '../../Fonts';
import { DetailCalendar } from './Calendar';

const DetailPage = (props) => {
  return (
    <SafeAreaView style={styles.container}>
       <Text style={styles.circleNameText}>{props.circleName}</Text> 
       <DetailCalendar style={styles.calendar}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: "stretch",
        justifyContent: 'center',
    },
    circleNameText: {
        flex: 0,
        fontFamily: Fonts.SquareB,
        fontSize: 30,
        color: "#000000",
        marginTop: 10,
        alignItems: "center",
        backgroundColor: "#FF0000"
    },
    calendar: {
      flex: 2,
      flexDirection: "column",
      alignItems: "stretch",
      backgroundColor: "#00FF00"
    }
});

export default DetailPage;