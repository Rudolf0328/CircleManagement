import React from 'react';
import MyPage from './Pages/Mypage';
import HomePage from './Pages/HomePage';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    // <MyPage></MyPage>
    <>
      <SafeAreaView/>
      <HomePage></HomePage>
    </>
  );
};
export default App;
