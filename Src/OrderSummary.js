import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Alert} from 'react-native';
import Selected from '../Selected';
import Icon from 'react-native-vector-icons/Feather';
import {RadioButton} from 'react-native-paper';

const OrderSummary = () => {
  const [checked, setChecked] = useState('first');
  return (
    <View>
      <Selected />

      { <View style={{backgroundColor: '#fff', marginTop: 10, height: 60}}>
        <TouchableOpacity>
          <View
            style={{
              marginTop: 18,
              flexDirection: 'row',
              marginLeft: 50,
            }}>
            <Text
              style={{
                fontSize: 15,
                color: '#fff',
                backgroundColor: 'blue',
                width: 20,
                height: 20,
                borderRadius: 50,
                textAlign: 'center',
              }}>
              1
            </Text>
            <Text style={{textDecorationLine: 'line-through'}}> </Text>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                backgroundColor: '#fff',
                borderWidth: 0.5,
                width: 20,
                height: 20,
                borderRadius: 50,
                textAlign: 'center',
              }}>
              2
            </Text>
            <Text style={{textDecorationLine: 'line-through'}}> </Text>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                backgroundColor: '#fff',
                borderWidth: 0.5,
                width: 20,
                height: 20,
                borderRadius: 50,
                textAlign: 'center',
              }}>
              3
            </Text>
          </View>
        </TouchableOpacity>
      </View>/* <View style={{backgroundColor: '#fff', marginTop: 10, height: 60}}>
        <TouchableOpacity>
          <View
            style={{
              marginTop: 18,
              flexDirection: 'row',
              marginLeft: 50,
            }}>
            <Text
              style={{
                fontSize: 15,
                color: '#fff',
                backgroundColor: 'blue',
                width: 20,
                height: 20,
                borderRadius: 50,
                textAlign: 'center',
              }}>
              1
            </Text>
            <Text style={{textDecorationLine: 'line-through'}}> </Text>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                backgroundColor: '#fff',
                borderWidth: 0.5,
                width: 20,
                height: 20,
                borderRadius: 50,
                textAlign: 'center',
              }}>
              2
            </Text>
            <Text style={{textDecorationLine: 'line-through'}}> </Text>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
                backgroundColor: '#fff',
                borderWidth: 0.5,
                width: 20,
                height: 20,
                borderRadius: 50,
                textAlign: 'center',
              }}>
              3
            </Text>
          </View>
        </TouchableOpacity>
      </View> */}

      <View style={{backgroundColor: '#fff', marginTop: 10, height: 50}}>
        <TouchableOpacity>
          <View
            style={{
              marginTop: 11,
              flexDirection: 'row',
              marginLeft: 20,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 4},
              shadowOpacity: 0.4,
              shadowRadius: 40,
              elevation: 3,
            }}>
            <Icon name="plus" type="font-awesome" color="blue" size={22} />
            <Text style={{fontSize: 15, color: 'blue'}}> Add new address</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={[1]}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  backgroundColor: '#fff',
                  width: '100%',
                  height: 200,
                  marginTop: 20,
                }}>
                <View
                  style={{flexDirection: 'row', marginLeft: 28, marginTop: 10}}>
                  <Text
                    style={{
                      marginLeft: 12,
                      fontSize: 14,
                      fontWeight: '700',
                      color: 'black',
                    }}>
                    Rahul
                  </Text>
                  <Text
                    style={{
                      backgroundColor: '#dedede',
                      marginLeft: 6,
                      width: 60,
                      height: 21,
                      textAlign: 'center',
                      borderRadius: 3,
                      fontWeight: '400',
                    }}>
                    Home
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#fff',
                      width: 40,
                      borderRadius: 2,
                      marginLeft: 140,
                      shadowColor: '#000',
                      shadowOffset: {width: 0, height: 4},
                      shadowOpacity: 0.4,
                      shadowRadius: 40,
                      elevation: 3,
                    }}>
                    <Text
                      style={{
                        fontSize: 11,
                        textAlign: 'center',
                        color: 'blue',
                        fontWeight: '500',
                        marginTop: 3,
                      }}>
                      Edite
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{marginLeft: 40, marginTop: 26}}>
                  <Text style={{fontWeight: '400', color: '#4b4b4f'}}>
                    Pakbada hasanpur chauraha, Pakbada
                  </Text>
                  <Text style={{fontWeight: '400', color: '#4b4b4f'}}>
                    dehli road,Dehli Road,Moradabad
                  </Text>
                  <Text style={{fontWeight: '400', color: '#4b4b4f'}}>
                    Utter Pradesh - 244102
                  </Text>
                  <Text style={{fontWeight: '400', color: '#4b4b4f'}}>
                    88888888888
                  </Text>
                </View>
                <View style={{position: 'absolute'}}>
                  <RadioButton
                    value="first"
                    status={checked === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('first')}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={{marginTop: '90%', borderRadius: 3}}>
        <TouchableOpacity
          onPress={() => Alert.alert('Successfully Order')}
          style={{backgroundColor: '#f29807', height: 50}}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 13,
              fontWeight: '700',
              color: '#fff',
            }}>
            DELEVER HERE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderSummary;
