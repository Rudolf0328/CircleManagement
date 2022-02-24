import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, useWindowDimensions, useState, TouchableOpacity, Image } from 'react-native';
import colors from '../../constants/colors';
import consts from '../../constants/consts';
import { Fonts } from '../../Fonts';
import "react-native-gesture-handler";
import { TabView, TabBar } from 'react-native-tab-view';
import DetailHomePage from '../DetailHome';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableHighlight } from 'react-native-gesture-handler';

const LOGO_SIZE = 50;
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
                return <DetailHomePage introduceText={props.introduceText}/>;
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
                
                <View style={{
                    flex: 0,
                    flexDirection: 'row',
                    justifyContent: "center"
                }}>
                    <TouchableHighlight style={styles.circleImgContainer}>
                        <Image
                            style={styles.circleImage}
                            source={require('../../images/eoslogo.png')}
                            resizeMode='contain'
                        />
                    </TouchableHighlight>

                    <Text style={styles.circleNameText}>{props.circleName}</Text>

                </View>
                
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
        alignItems: "center",
        justifyContent: "space-between",
        margin: consts.default_margin,                                                                                                                      
    },
    center_header: {
        flex: 0,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    iconStyle: {
        flex: 0,
        fontSize: 30,
        color: colors.text,
        alignSelf: "flex-end"
    },
    circleNameText: {
        flex: 0,
        fontFamily: Fonts.Dohyeon,
        fontSize: 20,
        color: colors.text,
        alignSelf: "center"
    },
    circleImage: {
        height: LOGO_SIZE,
        width: LOGO_SIZE,
        borderRadius: 100,
    },
    circleImgContainer: {
        height: LOGO_SIZE,
        width: LOGO_SIZE,
        backgroundColor: "white",
        overflow: "hidden",
        borderRadius: 100,
        marginRight: 10,
    },
});


export default DetailPage;