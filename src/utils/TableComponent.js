import React,{useState} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Modal, Pressable} from 'react-native';
import { TextInput } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const TableComponent = ({data}) =>{
    const [modalVisible, setModalVisible] = useState(true);
    const [uidata,setUiData] = useState(data.slice(0,10))

    const deleteRecord = (data) =>{
       let FilteredData = uidata.filter((item)=>item.id !== data.id)
       setUiData(FilteredData)
    }
    const updateRecord = (data) =>{
       console.log(data);
    }
   return ( <>
   {
    uidata && uidata.map((item)=>
               <View key={item?.id} style={{flexDirection:'row',justifyContent:'space-between',padding:5}}>
                <Text>{item?.name}</Text>
                <Text >{item?.email.length < 6 ? item.email :`${item.email.substring(0,6)}...`}</Text>
                <Text >{item.role }</Text>
                <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={() =>updateRecord(item)}>
                <MaterialIcons name='square-edit-outline' color='grey' size={20}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>deleteRecord(item)}>
                <MaterialIcons name='delete-outline' color='red' size={20} />
                </TouchableOpacity>
                </View>
                </View>)
   }
     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{flex:1,justifyContent:'center'}}>
            <View style={{backgroundColor:'#fff',elevation:5,margin:50,minHeight:300,borderRadius:20,padding:5}}>
            <TextInput
             mode="outlined"
            label="Name"
              placeholder="Enter Name"
              style={{margin:10,height:40}}
              />
            <TextInput
             mode="outlined"
            label="Email"
              placeholder="Enter Email"
              style={{margin:10,height:40}}
              />
              <TextInput
             mode="outlined"
            label="Role"
              placeholder="Enter Role"
              style={{margin:10,height:40}}
              />
            <View>
            <View style={{flexDirection:'row',justifyContent:"space-around",marginTop:30}}>
            <Pressable
            style={{borderRadius:5,backgroundColor:'#97D2EC',minWidth:100,minHeight:30,justifyContent:'center',alignItems:'center'}}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>Update</Text>
            </Pressable>
            <Pressable 
            style={{backgroundColor:'#FA9494', borderRadius:5,minWidth:100,minHeight:30,justifyContent:'center',alignItems:'center'}}
            onPress={() => setModalVisible(!modalVisible)}
            >
              <Text>Cancel</Text>
            </Pressable>
            </View>
          </View>
            </View>
        </View>
      </Modal>
   </>
   )  
}

const Styles = StyleSheet.create({
    textStyle:{
        maxWidth:100

    }
})


export default TableComponent;