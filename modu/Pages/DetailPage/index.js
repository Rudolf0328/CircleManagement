import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, useWindowDimensions, useState, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';
import consts from '../../constants/consts';
import { Fonts } from '../../Fonts';
import "react-native-gesture-handler";
import { TabView, TabBar } from 'react-native-tab-view';
import DetailHomePage from '../DetailHome';
import Icon from 'react-native-vector-icons/Ionicons';

const DetailPage = (props) => {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);    

    const [routes] = React.useState([
        { key: "first", title: "Home" },
        { key: "second", title: "Finance" },
        { key: "third", title: "Assignment" },
    ]);

    const renderScene = ({ route }) => {
        switch (route.key) {
            case "first":
                return <DetailHomePage/>;
            case "second":
                return <View style={{ flex: 1, backgroundColor: "ff4081" }} />;
            case "third":
                return <View style={{ flex: 1, backgroundColor: "ff4081" }} />;
            default:
                return null;
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="chevron-back" style={styles.iconStyle} />
                </TouchableOpacity>
                
                <Text style={styles.circleNameText}>{props.circleName}</Text> 
                
                <TouchableOpacity>
                    <Icon name="settings-outline" style={styles.iconStyle} />
                </TouchableOpacity>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                swipeEnabled={false}
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        scrollEnabled={false}
                        indicatorStyle={{
                            backgroundColor: "black",
                            
                        }}
                        activeColor={"black"}
                        inactiveColor={"lightgray"}
                        pressOpacity={0.5}
                        style={{
                            backgroundColor: "transparent",
                        }}
                        labelStyle={{
                            fontFamily: Fonts.Dohyeon
                        }}
                        
                    />
                )}
            />
        </View>
        
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
    iconStyle: {
        flex: 0,
        fontSize: 30,
        color: colors.text,
        alignSelf: "center",
    },
    circleNameText: {
        flex: 0,
        fontFamily: Fonts.Dohyeon,
        fontSize: 20,
        color: colors.text,
        alignSelf: "center"
    },
});


export default DetailPage;