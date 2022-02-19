import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import colors from '../../constants/colors';
import { Fonts } from '../../Fonts';
import { DetailCalendar } from './Calendar';
import consts from '../../constants/consts';
import Icon from 'react-native-vector-icons/Ionicons';

const DetailPage = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.circleNameText}>{props.circleName}</Text> 
        <Icon name="settings-outline" size={30} color={"#000000"} style={styles.settingIcon}/>
      </View>
       <DetailCalendar style={styles.calendar}/>
       
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
    header: {
      flex: 0,
      flexDirection: "row",
      alignItems: "stretch",
      justifyContent: "space-between",      
      margin: consts.default_margin,
    },
    settingIcon: {
      flex: 0,
      color: colors.text,
      alignSelf: "center"
    },
    circleNameText: {
        flex: 0,
        fontFamily: Fonts.Dohyeon,
        fontSize: 20,
        color: colors.text,
        alignSelf: "center"
    },
    calendar: {
      flex: 0,
      marginRight: consts.default_margin,
      marginLeft: consts.default_margin,
      flexDirection: "column",
      alignItems: "stretch",
    }
});

export default DetailPage;