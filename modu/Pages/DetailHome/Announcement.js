import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Image, Button } from 'react-native';
import colors from '../../constants/colors';
import { Fonts } from '../../Fonts';
import { DetailCalendar } from './Calendar';
import consts from '../../constants/consts';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Announcement = () => {
    
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View style={styles.title_container}>
                    <Image source={require("../../images/announcement_icon.png")}
                        style={styles.icon_style}
                        resizeMode={"contain"} />
                    <Text style={styles.title}>공지</Text>
                </View>
                

                <TouchableOpacity style={styles.plus_btn}>
                    <Text style={styles.plus_txt}>더보기</Text>
                </TouchableOpacity>
            </View>
            
            
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: Fonts.Dohyeon,
        fontSize: 20,
        color: "black"
    },
    icon_style: {
        width: 50,
        height: 50,
    },
    title_container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    header: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: consts.default_margin,
        marginRight: consts.default_margin,
        alignItems: "center",
    },
    plus_btn: {
        flex: 1,
    },
    plus_txt: {
        flex: 1,
        fontSize: 14,
        color: "gray",
        fontFamily: Fonts.Dohyeon,
        textAlignVertical: "center"
    }
});

export default Announcement;