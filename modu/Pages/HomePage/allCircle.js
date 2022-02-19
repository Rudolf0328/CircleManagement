import React from 'react';
import { SafeAreaView, StyleSheet, Text} from 'react-native';
import colors from '../../constants/colors';
import SearchBar from './serachBar';

const AllCircle = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar/>
      <Text>All Circle</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default AllCircle;