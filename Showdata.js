import React, {useState} from 'react';
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

const Showdata = props => {
  const [data, setdata] = useState([up]);

  const {up} = props.route.params;
   
  const Adddata = ()=> {

 var result = up.reduce(function (acc, obj) { return acc + obj.price; }, 0);
     console.log(result);  
     Alert.alert("Total Rs.",result.toString())
  }
    
    
        
  

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
       onPress={()=>{Adddata(); }}
        style={{
          backgroundColor: 'green',
          width: '100%',
          height: 50,
          marginTop: 10,
          
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            marginTop: 12,
            fontSize: 20,
            fontWeight: '600s',
          }}>
          Add
        </Text>
      </TouchableOpacity>

     

      <View>
        <FlatList
          data={up}
          numColumns={2}
          renderItem={({item}) => {
            return (
              <View style={Styles.container}>
                <View style={{alignSelf: 'center'}}>
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 56,
                      alignSelf: 'center',
                    }}>
                    <Image
                      source={{uri: item.thumbnail}}
                      style={{width: 60, height: 60}}
                    />
                  </View>
                  <Text
                    style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
                    {item.title}
                  </Text>

                  <Text
                    style={{
                      color: 'red',
                      textAlign: 'center',
                      fontSize: 14,
                      fontWeight: '500',
                    }}>
                    {item.price}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
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
});

export default Showdata;
