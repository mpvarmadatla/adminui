import React from 'react';
import {StyleSheet,TextInput,View,Text} from 'react-native';
import admindata from '../AdminUI_JSON.json'
import TableComponent from './utils/TableComponent';

const MainAppScreen = () =>{
    return (
    <View style={Styles.mainContainer}>
          <TextInput 
           style={Styles.textInputContainer}
           placeholder="Search by name, email or role"
            />
            <HeaderTitle />
            <TableComponent data={admindata} />
    </View>
    )
}

const Styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        margin:5,
        padding:10
    },
    textInputContainer:{
       borderWidth:1,
       borderColor:'lightgrey',
       padding:10
    }
})

export default MainAppScreen;

export const HeaderTitle = () =>{
    const headerTitles= ['Name','Email','Role','Actions']
    return (
        <View style={{flexDirection:'row',borderBottomWidth:1,justifyContent:'space-between',padding:5,marginTop:10}}>
            {headerTitles.map((item)=><Text key={item}>{item}</Text>)}
        </View>
    )
}