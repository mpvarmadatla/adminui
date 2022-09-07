import React from 'react';
import {SafeAreaView} from 'react-native';
import MainAppScreen from './src/MainAppScreen';


const App = () =>{
  return (
    <SafeAreaView style={{flex:1}}>
         <MainAppScreen />
    </SafeAreaView>
  )
}


export default App;