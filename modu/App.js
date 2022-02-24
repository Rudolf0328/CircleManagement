import React from 'react';
import DetailPage from './Pages/DetailPage';
import MyPage from './Pages/Mypage';
import HomePage from './Pages/HomePage';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <DetailPage circleName={"[한양대] 에오스"}></DetailPage>
    // <>
    //   <SafeAreaView/>
    //   <HomePage></HomePage>
    // </>
  );
};
export default App;
