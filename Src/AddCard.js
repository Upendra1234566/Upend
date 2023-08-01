import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {Picker} from '@react-native-picker/picker';
// import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Headers from '../Headers';

const AddCard = ({navigation}) => {
  // const navigation = useNavigation();

  const [search, setSearch] = useState(0);
  const [selectedValue, setSelectedValue] = useState('');
  const [add, setAdd] = useState(' Add to Card');
  const [order, setOrder] = useState('');

  const Add = [
    {
      id: 5,
      title: 'Samsung Universe 9',
      price: '₹499',
      thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
      qty: 0,
    },
  ];

  return (
    <View>
      <Headers />
      <ScrollView>
        <View>
          <FlatList
            data={Add}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    backgroundColor: '#fff',
                    width: '100%',
                    height: 200,
                    margin: 16,
                    alignSelf: 'center',
                    shadowColor: '#fff',
                    shadowOffset: {width: 0, height: 4},
                    shadowOpacity: 0.7,
                    shadowRadius: 40,
                    elevation: 3,
                  }}>
                  <View>
                    <Image
                      source={{uri: item.thumbnail}}
                      style={{width: '34%', height: '70%', marginTop: 8}}
                    />
                    <View
                      style={{
                        backgroundColor: '#fff',
                        width: '30%',
                        height: 44,
                        borderRadius: 4,
                        borderWidth: 0.4,
                        marginTop: 5,
                        marginLeft: 10,
                      }}>
                      <Picker
                        selectedValue={selectedValue}
                        onValueChange={itemValue =>
                          setSelectedValue(itemValue)
                        }>
                        <Picker.Item label="1" value="option1" />
                        <Picker.Item label="2" value="option2" />
                        <Picker.Item label="3" value="option3" />
                        <Picker.Item label="4" value="option4" />
                        <Picker.Item label="5" value="option5" />
                        <Picker.Item label="6" value="option6" />
                      </Picker>
                    </View>
                  </View>
                  <View style={{position: 'absolute', bottom: 24, right: 40}}>
                    <Text
                      style={{
                        fontWeight: '700',
                        color: '#1b1b1f',
                        fontSize: 18,
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      style={{fontSize: 11, marginTop: 4, fontWeight: '500'}}>
                      Black Strap Free Size
                    </Text>
                    <Text style={{marginTop: 6, fontWeight: '400'}}>
                      Seller Retaillnet..
                    </Text>
                    <Text
                      style={{fontSize: 18, color: 'orange', marginTop: 10}}>
                      * * * * *
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                      <Text
                        style={{
                          marginLeft: 2,
                          color: 'green',
                          fontWeight: '600',
                          fontSize: 14,
                          textDecorationLine: 'line-through',
                        }}>
                        ₹69% off{' '}
                      </Text>
                      <Text
                        style={{
                          marginLeft: 6,
                          color: '#84848a',
                          fontWeight: '600',
                          fontSize: 14,
                        }}>
                        {' '}
                        ₹4,999
                      </Text>
                      <Text
                        style={{
                          marginLeft: 6,
                          fontWeight: '600',
                          color: '#070805',
                          fontSize: 14,
                        }}>
                        {' '}
                        ₹1,500
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          color: 'green',
                          fontWeight: '500',
                        }}>
                        5 offers applied{' '}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          color: 'green',
                          fontWeight: '500',
                        }}>
                        {' '}
                        7 offers available
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontWeight: '500',
                          color: 'green',
                        }}>
                        Free Delivery{' '}
                      </Text>
                      <Text style={{fontSize: 12, fontWeight: '500'}}>₹49</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />

          {order ? (
            <View>
              <Text
                style={{
                  marginLeft: 12,
                  fontWeight: '700',
                  fontSize: 20,
                  color: '#090a06',
                }}>
                Price Details
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{marginLeft: 12, marginTop: 10}}>
                  price (5 items)
                </Text>
                <Text
                  style={{marginRight: 12, marginTop: 10, color: '#141412'}}>
                  {' '}
                  ₹1,43,180
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{marginLeft: 12, marginTop: 10}}>Discount</Text>
                <Text style={{marginRight: 12, marginTop: 10, color: 'green'}}>
                  - ₹1,32,808
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{marginLeft: 12, marginTop: 10}}>
                  Delivery Chrages
                </Text>
                <Text style={{marginRight: 12, marginTop: 10, color: 'green'}}>
                  Free Delivery
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{marginLeft: 12, marginTop: 10}}>
                  Seured Packaging Fee
                </Text>
                <Text
                  style={{marginRight: 12, marginTop: 10, color: '#141412'}}>
                  {' '}
                  ₹49
                </Text>
              </View>
              <View style={{marginLeft: -10}}>
                <Text
                  style={{
                    borderBottomWidth: 1,
                    width: windowWidth,
                    borderBottomColor: '#cfcdcc',
                  }}></Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text
                  style={{
                    marginLeft: 12,
                    marginTop: 10,
                    fontWeight: '800',
                    fontSize: 16,
                    color: '#070806',
                  }}>
                  Total Amount
                </Text>
                <Text
                  style={{
                    marginRight: 12,
                    marginTop: 10,
                    color: '#070806',
                    fontWeight: '700',
                  }}>
                  {' '}
                  ₹1,21,889
                </Text>
              </View>
              <View style={{marginLeft: -10}}>
                <Text
                  style={{
                    borderBottomWidth: 1,
                    width: windowWidth,
                    borderBottomColor: '#cfcdcc',
                  }}></Text>
              </View>

              <View
                style={{
                  width: '94%',
                  marginLeft: 11,
                  marginTop: '20%',
                  borderRadius: 8,
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('OrderSummary')}
                  style={{
                    backgroundColor: '#8acc06',
                    height: 50,
                    borderRadius: 8,
                    shadowColor: '#000',
                    shadowOffset: {width: 10, height: 40},
                    shadowOpacity: 0.8,
                    shadowRadius: 80,
                    elevation: 8,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 13,
                      fontWeight: '700',
                      color: '#fff',
                      fontSize: 17,
                    }}>
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View
              style={{backgroundColor: '#fff', height: 50, marginTop: '103%'}}>
              <Text
                style={{
                  marginLeft: 12,
                  fontWeight: '600',
                  color: 'black',
                  fontSize: 20,
                }}>
                ₹4,9999,87
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity
                  onPress={() => setOrder(!order)}
                  style={{marginLeft: 12}}>
                  <Text
                    style={{color: 'blue', fontWeight: '500', fontSize: 13}}>
                    View price detail
                  </Text>
                  <TouchableOpacity />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => navigation.navigate('OrderSummary')}
                  style={{
                    backgroundColor: 'orange',
                    width: '40%',
                    height: 40,
                    borderRadius: 4,
                    position: 'absolute',
                    bottom: -1,
                    right: 24,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: '600',
                      marginTop: 8,
                      color: '#0c0d09',
                    }}>
                    Place Order
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
const Styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default AddCard;
