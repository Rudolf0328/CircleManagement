import React from 'react';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import colors from '../../constants/colors';
import CardView from './card';
import SearchBar from './serachBar';

type Tab = {
  key: String;
  name: String;
  params: Object | undefined;
};

function HomePage({state, descriptors, navigation}: MaterialTopTabBarProps) {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar/>
      <View style={styles.tabWrapper}>
        {state.routes.map((route: Tab, index: number) => {
          const label = route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <TabButton isFocused={isFocused} onPress={onPress} key={`tab_${index}`}>
              <TabText isFocused={isFocused}>{label}</TabText>
            </TabButton>
          )
        })}
      </View>
       {/* <CardView circleName={"동아리 이름"}>
       </CardView> */}
    </SafeAreaView>
  );
};

const TabButton = styled.TouchableOpacity<{isFocused: boolean}>`
  align-items: center;
  justify-content: center;
  height: 40px;
  margin: 0px 16px;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) =>
    props.isFocused ? '#5d004a' : 'transparent'};
`;

const TabText = styled.Text<{isFocused: boolean}>`
  font-weight: 800;
  color: ${(props) => (props.isFocused ? '#5d004a' : '#000000')};
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabWrapper: {
    flexDirection: row,
    display: flex,
    alignItems: center,
    marginTop: '16px',
    paddingLeft: '4px'
  }
});

export default HomePage;