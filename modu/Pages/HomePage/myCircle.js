import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import colors from '../../constants/colors';
// import SearchBar from './serachBar';
import { SearchBar } from 'react-native-elements';
// import CardView from './card';
import Circle from './circle';

const AllCircle = (props) => {
  const { circles } = props;
  const [search, setSearch] = useState("");
  const [containerWidth, setContainerWidth] = useState(0);

  const margins = 39 * 2;
  const numColumns = 2;

  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circles}>
        <FlatList
          keyExtractor={item => item.name.toString()}
          scrollEnabled={true}
          data={circles}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-evenly",
            marginBottom: 23,
            // marginVertical: 15
            // marginHorizontal: 40
          }}
          // onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
          renderItem={({item}) => <Circle circle={item} />}
          />
        {/* <Text>All Circle</Text> */}
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
    width: '100%',
    height: 50,
    // backgroundColor: '#fff'
  },
  circles: {
    flex: 1,
    width: '100%',
    marginTop: 25
    // backgroundColor: '#fff'
  }
});

export default AllCircle;