import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Alert } from 'react-native';

function Separator() {
    return <View style={styles.separator}></View>
}

export default function App() {
    return (
        <View style = {styles.container}>
            <TouchableOpacity 
                style={styles.loginButton}
                onPress={() => Alert.alert('TODO')}>
                <Image 
                    style={styles.image}
                    source={require('../images/kakao_login.png')}
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
        marginHorizontal: 16,
    },
    loginButton: {
        flex: 1,
        margin: 10,
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    separator: {
        marginVertical: 9,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    buttonSize: {
        margin: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    }
    
});