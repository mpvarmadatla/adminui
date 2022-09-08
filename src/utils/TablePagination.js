import React from "react";
import {Text,TouchableOpacity,View,Button,StyleSheet} from 'react-native';
import MaterailIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const TablePagination = ({postsPerPage,totalPosts,paginate,currentPage}) =>{
    const pageNumbers =[]
    
    for(let i=1;i<= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <View style={{padding:5}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
             <TouchableOpacity
             disabled={ currentPage === 1 ? true : false}
             style={currentPage === 1 ? {...Styles.circularContanier,backgroundColor:'grey'}: Styles.circularContanier}
             onPress={()=>paginate(1)}
              >
                <MaterailIcon name="chevron-double-left" size={20} />
             </TouchableOpacity>
             <TouchableOpacity
              disabled={ currentPage === 1 ? true : false}
              onPress={()=>paginate(currentPage-1)}
              style={currentPage === 1 ? {...Styles.circularContanier,backgroundColor:'grey'}: Styles.circularContanier}
             >
                <MaterailIcon name="chevron-left" size={20} />
             </TouchableOpacity>
            {
                pageNumbers.map((number)=>
                  
                    <TouchableOpacity onPress={()=>paginate(number)} key={number} 
                    style={currentPage === number ? {...Styles.circularContanier,backgroundColor:'white',borderWidth:1,borderColor:'lightblue'}: Styles.circularContanier}
                     >
                    <Text>{number}</Text>
                    </TouchableOpacity>
               
                )
            }
             <TouchableOpacity
             disabled={ currentPage === Math.ceil(totalPosts/postsPerPage) ? true : false}
             onPress={()=>paginate(currentPage+1)}
             style={currentPage === Math.ceil(totalPosts/postsPerPage) ? {...Styles.circularContanier,backgroundColor:'grey'}: Styles.circularContanier}
             >
                <MaterailIcon name="chevron-right" size={20} />
             </TouchableOpacity>
             <TouchableOpacity
               disabled={ currentPage === Math.ceil(totalPosts/postsPerPage) ? true : false}
               style={currentPage === Math.ceil(totalPosts/postsPerPage) ? {...Styles.circularContanier,backgroundColor:'grey'}: Styles.circularContanier}
               onPress={()=>paginate(Math.ceil(totalPosts/postsPerPage))}
               >
                <MaterailIcon name="chevron-double-right"  size={20}/>
             </TouchableOpacity>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    circularContanier:{
        marginTop:20,
        width:20,
        height:20,
        backgroundColor:'lightblue',
        marginLeft:3,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    }
})

export default TablePagination;