import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Headercc = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState(0);
  const [add, setAdd] = useState('Filter ');
  const [check, setCheck] = useState(0);
  const refdata = useRef();

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
  ];

  return (
    <View>
      <View
        style={{
          backgroundColor: '#fff',
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
              <TouchableOpacity
               
              >
                <Icon
                  name="arrow-left"
                  type="font-awesome"
                  color="black"
                  size={24}
                  style={Styles.ImageSource}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginLeft: 230,
              }}>
              <TouchableOpacity onPress={() => refdata.current.open()}>
                <Text>Clear Filter</Text>
              </TouchableOpacity>
            </View>

            <RBSheet
              ref={refdata}
              closeOnDragDown={false}
              closeOnPressMask={true}
              customStyles={{
                wrapper: {
                  backgroundColor: 'transparent',
                },
                draggableIcon: {
                  backgroundColor: 'blue',
                },
              }}>
              <View style={{flex: 1, marginLeft: 12, marginTop: 26}}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                  onPress={() => refdata.current.close()}
                  >
                    <Icon
                      name="x"
                      type="font-awesome"
                      color="black"
                      size={24}
                      style={Styles.ImageSource}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      marginLeft: 16,
                      fontWeight: '600',
                      fontSize: 18,
                      color: 'c17',
                    }}>
                    Clear Filter
                  </Text>
                </View>
                <View style={{marginTop: 50}}>
                  <Text
                    style={{fontSize: 15, color: '#151517', fontWeight: '500'}}>
                    Clear Filter
                  </Text>
                  <Text>Would you like to clear following filters?</Text>
                </View>
                {check == 0 ? (
                  <View>
                    <View>
                      <TouchableOpacity onPress={() => setCheck(!check)}>
                        <Text
                          style={{
                            width: 20,
                            borderWidth: 0.6,
                            height: 20,
                            marginTop: 20,
                            backgroundColor: '#edf1f7',
                          }}>
                          {' '}
                        </Text>
                      </TouchableOpacity>
                      <View
                        style={{
                          position: 'absolute',
                          bottom: 2,
                          left: 40,
                        }}>
                        <Text style={{fontWeight: '500', color: 'black'}}>
                          Deliver At
                        </Text>
                      </View>
                    </View>
                  </View>
                ) : (
                  <View style={{borderRadius: 50, marginTop: 20}}>
                    <TouchableOpacity onPress={() => setCheck(!check)}>
                      <Image
                        source={{
                          uri: 'https://media.istockphoto.com/id/1177664322/vector/blue-flat-checkmark-icon.jpg?s=612x612&w=0&k=20&c=Y9YC-xqGF7iCa-TyGjgS1FmPPhY9U34cKzwmO2asNP4=',
                        }}
                        style={{width: 20, height: 20, borderWidth: 0.6}}
                      />
                    </TouchableOpacity>
                    <View style={{position: 'absolute', bottom: 2, left: 40}}>
                      <Text style={{fontWeight: '500', color: 'black'}}>
                        Deliver At
                      </Text>
                    </View>
                  </View>
                )}
                <View style={{flexDirection: 'row', marginTop: 18}}>
                  <TouchableOpacity
                  onPress={() => refdata.current.close()}
                    style={{
                      borderWidth: 0.4,
                      width: '44%',
                      height: 45,
                      borderRadius: 2,
                    }}>
                    <Text style={{textAlign: 'center', marginTop: 10}}>
                      Cancle
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => refdata.current.close()}
                    style={{
                      width: '44%',
                      height: 45,
                      borderRadius: 2,
                      backgroundColor: '#091ced',

                      marginLeft: 12,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        marginTop: 11,
                        fontSize: 15,
                        fontWeight: '500',
                        color: '#fff',
                      }}>
                      Clear
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </RBSheet>
          </View>
        ) : null}
      </View>
      <View style={{position: 'absolute', bottom: 19, left: 50}}>
        <Text style={{fontSize: 19, fontWeight: '300', color: 'black'}}>
          {add}
        </Text>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default Headercc;
