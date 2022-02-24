import React, {useState} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function SearchBar() {
  const [value, setValue] = useState('');

  return (
    <View style={styles.searchBarWrapper}>
      <Image style={styles.searchIcon} source={require('../../images/search.png')} />
      <TextInput style={styles.searchInput}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setValue}
        placeholder="검색어를 입력해 주세요."
        returnKeyType="search"
        returnKeyLabel="search"
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    borderRadius: 4,
    // paddingTop: 10,
    // paddingRight: 14,
    // paddingBottom: 10,
    paddingLeft: 12,
    marginTop: 0,
    width: '100%',
    height: 30,
    // marginRight: 20,
    display: 'flex',
  },
  searchInput: {
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    includeFontPadding: false,
    padding: 0,
    backgroundColor: '#fff',
    width: '100%'
  },
  searchIcon: {
    width: '10%',
    resizeMode: 'contain',
  }
});