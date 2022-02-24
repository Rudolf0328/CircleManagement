import React from 'react';
import DetailPage from './Pages/DetailPage';
import MyPage from './Pages/Mypage';
import HomePage from './Pages/HomePage';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <DetailPage 
      circleName={"[한양대] 에오스"}
      introduceText={"에오스는 한양대학교의 안드로이드 앱 개발 동아리 입니다"}
    ></DetailPage>
  );
};
export default App;
