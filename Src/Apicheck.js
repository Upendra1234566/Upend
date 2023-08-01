
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Header from '../Header';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Arraydata = props => {

  useEffect(()=>{
   getData()
  },[])


  const [cart1, setCart1] = useState([]);
  const [show, setShow]=useState([]);
  
  const navigation = useNavigation();
  const isFocused = useIsFocused();


   const getData = async () => {
    const data1 = await AsyncStorage.getItem('ID');
    // const data2 = await AsyncStorage.setItem('ID');
    // const Pass = await AsyncStorage.getItem('PASSWORD');
    // const mail = JSON.stringify(await AsyncStorage.getItem('EMAIL'))

    //let c = mail + Pass;

    setShow(JSON.parse(data1));

    console.log(data1);
  };
  
  

 
    
 


  return (
    <View style={{flex: 1}}>
      <Header
        leftIcon={{
          uri: 'https://cdn-icons-png.flaticon.com/512/2415/2415292.png',
        }}
        rightIcon={{
          uri: 'https://cdn-icons-png.flaticon.com/512/3239/3239958.png',
        }}
      />
      <View
        style={{
          backgroundColor: 'red',
          borderRadius: 20,
          height: 20,
          width: 20,
          position: 'absolute',
          right: 20,
          top: 10,
          position: 'absolute',
          right: 20,
          top: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: 12,
            fontWeight: '500',
            marginTop: 1,
          }}
          // onPress={()=> navigatefn()}
          >
          {show.length}
        </Text>
      </View>
      
      {/* {cart.map(a => {
        return (
          <Text style={{backgroundColor: 'red', textAlign: 'center'}}>{a.title}</Text>
        );
      })} */}
        <FlatList
        data={show}
        
        renderItem={({item})=>{
          
          return(
            <View>
              
              <View style={{justifyContent:"center",alignItems:"center",marginTop:230}}> 
              <Text>{"ID: "+item.save.id}</Text>
              <Text>{item.save.title}</Text>
              {/* <Text>{item.save.description}</Text>
              <Text>{ '$'+item.save.price}</Text>
              <Text>{item.save.discountPercentage}</Text>
              <Text>{ "Rating "+item.save.rating}</Text>
              <Text>{item.save.brand}</Text>
              <Text>{item.save.category}</Text>
              <Text>{"Stock"+item.save.stock}</Text>
              <Image
                source={{uri:item.save.thumbnail}}
                style={{width:50,height:50}}
              /> */}
            
            </View>
              
               </View>
          )
        }}

        />      
  
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: windowWidth / 2 - 20,
    height: 200,
    marginTop: '5%',
    backgroundColor: '#ffffff',
    marginHorizontal: '2%',
    borderRadius: 10,
    marginLeft: 11,
    shadowColor: '#0d051a',
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  textdata: {
    fontSize: 14,
    fontWeight: '700',
    color: 'black',
  },
  Datalist: {
    alignSelf: 'center',
  },
});

export default Arraydata;
