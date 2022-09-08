import React, { useState } from 'react';
import {StyleSheet,TextInput,View,Text} from 'react-native';
import admindata from '../AdminUI_JSON.json'
import TableComponent from './utils/TableComponent';
import TablePagination from './utils/TablePagination';

const MainAppScreen = () =>{
   const [currentPage,setCurrentPage] = useState(1);
   const [postsPerPage] = useState(10);

   //Get current posts
   const indexOfLastPost = currentPage * 10;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = admindata.slice(indexOfFirstPost,indexOfLastPost)

   //change page
   const paginate = (number) => setCurrentPage(number);

    return (
    <View style={Styles.mainContainer}>
          <TextInput 
           style={Styles.textInputContainer}
           placeholder="Search by name, email or role"
            />
            <HeaderTitle />
            <TableComponent key={currentPosts[0].id} data={currentPosts} />
            <View style={{position:'absolute',bottom:300,right:0,width:300}}>
            <TablePagination 
             postsPerPage={postsPerPage} 
             totalPosts={admindata.length}
              paginate={paginate}
              currentPage={currentPage}
              />
            </View>
            
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