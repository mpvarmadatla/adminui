import React from "react";
import {Text,TouchableOpacity,View,Button} from 'react-native';

const TablePagination = ({postsPerPage,totalPosts,paginate}) =>{
    const pageNumbers =[]
    
    for(let i=1;i<= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:5}}>
            <Button title="DeleteSelected" color="red" />
            <View style={{flexDirection:'row'}}>
            {
                pageNumbers.map((number)=>
                  
                    <TouchableOpacity onPress={()=>paginate(number)} key={number} style={{width:20,height:20,backgroundColor:'lightblue',marginLeft:5,justifyContent:'center',alignItems:'center',borderRadius:20}}>
                    <Text>{number}</Text>
                    </TouchableOpacity>
               
                )
            }
            </View>
        </View>
    )
}

export default TablePagination;