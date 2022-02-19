import React from 'react';
import { SafeAreaView, StyleSheet, Text} from 'react-native';
import colors from '../../constants/colors';

const MyCircle = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MyCircle</Text>
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

export default MyCircle;