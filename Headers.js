import React,{useState} from "react";
import { View,Text,Dimensions,TouchableOpacity,StyleSheet } from "react-native";

import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Headers = ()=>{
    const navigation = useNavigation();
    const [search, setSearch] = useState(0);
    const [add,setAdd]=useState(" Add to Card")

    const Add = [
        {
            id: 3,
            title: 'Samsung Universe 9',
            price: 1249,
            thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
            qty: 0,
          },
          {
            id: 5,
            title: 'Huawei P30',
            price: 499,
            thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
            qty: 0,
          },
    ]

    return(
        <View>
             <View
        style={{
          backgroundColor: '#1787e8',
          width: windowWidth,
          height: windowHeight / 11.6,
        }}>
        {search == 0 ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              position: 'absolute',
              top: 19,
              left: 10,
            }}>
            <View style={{}}>
              <TouchableOpacity onPress={() => navigation.navigate('Upendra')}>
                <Icon
                  name="arrow-left"
                  type="font-awesome"
                  color="#fff"
                  size={28}
                  style={Styles.ImageSource}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 220,
                margin: 2,
              }}>
              <TouchableOpacity style={{marginRight: 30}}>
                <Icon
                  name="heart"
                  type="font-awesome"
                  color="#fff"
                  size={24}
                  style={Styles.ImageSource}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  name="shopping-cart"
                  type="font-awesome"
                  color="#fff"
                  size={24}
                  style={Styles.ImageSource}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
         <View style={{position:"absolute",bottom:19,left:100}}>
            <Text style={{fontSize:19,fontWeight:"700",color:"#fff"}}>{add}</Text>
         </View>
         
        </View>
    )
}
const Styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:"red"
    }
})

export default Headers;