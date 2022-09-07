import React from 'react';
import {StyleSheet,TextInput,View,Text} from 'react-native';

const MainAppScreen = () =>{
    return (
    <View style={Styles.mainContainer}>
          <TextInput 
           style={Styles.textInputContainer}
           placeholder="Search by name, email or role"
            />
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