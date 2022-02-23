import React from 'react';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import colors from '../../constants/colors';
import SearchBar from './serachBar';

const AllCircle = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBar />
      </View>
      <View style={styles.circles}>
        <Text>All Circle</Text>
      </View>
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
  searchBar: {
    // flex: 1,
    width: '100%'
  },
  circles: {
    flex: 1,
    width: '100%',
    // backgroundColor: '#fff'
  }
});

export default AllCircle;