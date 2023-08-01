import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
  Dimensions,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';
// import {Camera, useCameraDevices} from 'react-native-vision-camera';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Icon from 'react-native-vector-icons/Feather';

const Productapi = props => {
  const [product, setProduct] = useState([id]);
  const [data, setData] = useState([id]);
  const [cart, setCart] = useState([]);
  const [currentindex, setCureentindex] = useState(0);
  const [iconbar, setIconbar] = useState('Noida');
  const [mrp, setMrp] = useState('MRP.' + ' $223');
  const [selectedValue, setSelectedValue] = useState('');
  const [search, setSearch] = useState(0);
  const [coupon, setCoupon] = useState('unlock the Coupon >');
  const [dil, setDil] = useState(0);
  const [size, setSize] = useState(0);
  const [arrow, setArrow] = useState();
  const [bank, setBank] = useState(0);
  const [cross, setCross] = useState('');
  const [colorss, setColorss] = useState();

  const {id} = props.route.params;
  useEffect(() => {
    getdata1(id);
    dataSave();
  }, [id]);

  // useEffect(() => {
  //   permissionss();
  // }, []);

  // const permissionss = async () => {
  //   const cameraPermission = await Camera.getCameraPermissionStatus();
  //   const microphonePermission = await Camera.getMicrophonePermissionStatus();
  // };

  // const devices = useCameraDevices();
  // const device = devices.back;
  // if (device == null) return <ActivityIndicator />;
  const getdata1 = async w => {
    const url = 'https://dummyjson.com/products/' + w;
    let result = await fetch(url);
    result = await result.json();
    setProduct(result.images);
    setData(result);

    // console.log('kkkkkk', product.images);
    // alert(product)
    // product.map((val) =>{
    //   console.log(val)
    //   return

    // })
  };

  const countcart = u => {
    // cart.push(u);
    // setCart([...cart]);

    setCart(oldArray => [...oldArray, u]);
    console.log(u);
  };

  let namess = [];

  const SaveData = async () => {
    namess.push({save: data});

    await AsyncStorage.setItem('ID', JSON.stringify(namess));
    // await AsyncStorage.setItem('PASSWORD',JSON.stringify(names1));
    console.log('saved');

    props.navigation.navigate('Apicheck');
  };

  // const Toggle = () => {
  //   setSearch(true);
  // };
  const dataSave = e => {
    if (cross == '') {
      setCross('');
    } else {
    }
  };
  return (
    <View style={{flex: 1}}>
      {/* <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} /> */}
      <View
        style={{
          backgroundColor: 'skyblue',
          width: windowWidth,
          height: windowHeight / 12,
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
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Upendra')}>
              <Icon
                name="arrow-left"
                type="font-awesome"
                color="black"
                size={24}
                style={Styles.ImageSource}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                fontFamily: 'Lightltalic',
              }}>
              {iconbar}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                margin: 2,
                marginHorizontal: '36%',
              }}>
              <TouchableOpacity
                onPress={() => setSearch(!search)}
                style={{marginRight: 20}}>
                <Icon
                  name="search"
                  type="font-awesome"
                  color="black"
                  size={22}
                  style={Styles.ImageSource}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginRight: 20}}
                onPress={() => props.navigation.navigate('Wishit')}>
                {/* <Image
            source={require('./Image/Love.png')}
            style={{width:26, height: 26}}
          /> */}
                <Icon
                  name="heart"
                  type="font-awesome"
                  color="black"
                  size={22}
                  style={Styles.ImageSource}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Bag')}>
                <Icon
                  name="shopping-cart"
                  type="font-awesome"
                  color="black"
                  size={22}
                  style={Styles.ImageSource}
                />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 14,
                marginHorizontal: 12,
              }}>
              <View style={{marginTop: 2}}>
                {cross.length == 0 ? (
                  <TouchableOpacity>
                    <Icon
                      name="search"
                      type="font-awesome"
                      color="black"
                      size={22}
                      style={Styles.ImageSource}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setSearch(!search)}>
                    <Icon
                      name="arrow-left"
                      type="font-awesome"
                      color="black"
                      size={22}
                      style={Styles.ImageSource}
                    />
                  </TouchableOpacity>
                )}
              </View>
              {/* <Text style={{fontSize: 20, fontWeight: '500'}}>{iconbar}</Text> */}
              <TextInput
                placeholder="Search for brands & products"
                value={cross}
                onChangeText={e => setCross(e)}
                style={{marginHorizontal: 6, marginBottom: 10, width: '64%'}}
              />

              {cross.length == 0 ? (
                <View
                  style={{flexDirection: 'row', margin: 4, marginBottom: 14}}>
                  <TouchableOpacity
                    style={{marginRight: 26}}
                    // onPress={() => props.navigation.navigate('Wishit')}
                  >
                    <Icon
                      name="camera"
                      type="font-awesome"
                      color="black"
                      size={22}
                      style={Styles.ImageSource}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{marginRight: 26}}
                    // onPress={() => props.navigation.navigate('Wishit')}
                  >
                    <Icon
                      name="mic"
                      type="font-awesome"
                      color="black"
                      size={22}
                      style={Styles.ImageSource}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={{marginLeft: 60}}>
                  <TouchableOpacity onPress={() => setCross('')}>
                    <Icon
                      name="x"
                      type="font-awesome"
                      color="black"
                      size={22}
                      style={Styles.ImageSource}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        )}

        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            position: 'absolute',
            top: 16,
            left: 14,
          }}>
          <TouchableOpacity>
            <Icon
              name="arrow-left"
              type="font-awesome"
              color="black"
              size={30}
              style={Styles.ImageSource}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: '500'}}>{iconbar}</Text>
        </View> */}
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            margin: 16,
          }}> */}
        {/* <TouchableOpacity style={{marginRight: 26}}>
           

            <Icon
              name="search"
              type="font-awesome"
              color="black"
              size={26}
              style={Styles.ImageSource}
            />
          </TouchableOpacity> */}
        {/* <TouchableOpacity
            style={{marginRight: 26}}
            onPress={() => props.navigation.navigate('Wishit')}>
          
            <Icon
              name="heart"
              type="font-awesome"
              color="black"
              size={26}
              style={Styles.ImageSource}
            />
          </TouchableOpacity> */}
        {/* <TouchableOpacity>
            <Icon
              name="shopping-cart"
              type="font-awesome"
              color="black"
              size={26}
              style={Styles.ImageSource}
            />
          </TouchableOpacity> */}
        {/* </View> */}
      </View>

      <ScrollView>
        <View style={{}}>
          <View>
            <FlatList
              data={product}
              showsHorizontalScrollIndicator={false}
              horizontal
              pagingEnabled={true}
              onScroll={e => {
                const x = e.nativeEvent.contentOffset.x;
                setCureentindex((x / windowWidth).toFixed(0));
              }}
              renderItem={({item}) => {
                return (
                  <View style={{width: windowWidth}}>
                    <Image
                      source={{uri: item}}
                      style={{width: windowWidth, height: windowHeight / 1.9}}
                    />
                  </View>
                );
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: windowWidth,
            }}>
            {product.map((item, index) => {
              return (
                <View
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: 10,
                    backgroundColor: currentindex == index ? '#029e02' : 'gray',
                    margin: 2,
                    marginTop: 20,
                  }}></View>
              );
            })}
          </View>

          <View style={{marginHorizontal: 12}}>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  color: '#078ba6',
                  marginTop: 10,
                }}>
                {'Brand:' + data.brand}
              </Text>

              <Text style={{fontSize: 13, fontFamily: 'ExtraLiht '}}>
                {data.description}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              {/* <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'ExtraLihtltalic ',
                  fontWeight: '700',
                  color: '#0c0d0c',
                }}>
                {data.title}
              </Text> */}
              {/* <Text
                style={{
                  fontSize: 16,
                  marginLeft: '42%',
                  marginTop: 14,
                  color: '#270352',
                  fontWeight: '800',
                }}>
                {data.category}
              </Text> */}
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginTop: 10,
              }}>
              <Text
                style={{
                  textDecorationLine: 'line-through',
                  fontWeight: '400',
                  marginTop: 6,
                }}>
                {mrp}
              </Text>
              <View style={{}}>
                <Text
                  style={{
                    color: '#151b24',
                    fontSize: 17,
                    fontWeight: '800',
                    marginTop: 4,
                    marginLeft: 10,
                  }}>
                  {'$' + data.price}
                </Text>
              </View>

              {/* <LinearGradient
        colors={['#e3194b', '#ebd1df', '#db0b7a',]}
        style={[Styles.linearGradient,{borderRadius:4,height:30}]}>  
         */}
              <View style={{marginLeft: 20}}>
                <Text
                  style={{
                    color: '#339c03',
                    fontSize: 16,
                    fontWeight: '500',
                    marginTop: 4,
                    marginLeft: 80,
                  }}>
                  {' Discount 46% '}
                </Text>
              </View>
              {/* </LinearGradient>
               */}
            </View>
            <Text style={{fontWeight: '700', marginTop: 10}}>Rating...</Text>
            <View
              style={{
                flexDirection: 'row',
                width: '40%',
                height: 30,
              }}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/130/130188.png',
                }}
                style={{width: 14, height: 14, marginTop: 8}}
              />
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/130/130188.png',
                }}
                style={{width: 14, height: 14, marginTop: 8}}
              />
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/130/130188.png',
                }}
                style={{width: 14, height: 14, marginTop: 8}}
              />
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/130/130188.png',
                }}
                style={{width: 14, height: 14, marginTop: 8}}
              />
              <Image
                source={{
                  uri: 'https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/star-512.png',
                }}
                style={{width: 14, height: 14, marginTop: 8}}
              />

              <Text
                style={{
                  color: 'orange',
                  fontSize: 16,
                  borderRadius: 8,
                  width: 80,
                  height: 30,
                  fontWeight: '700',
                  marginTop: 4,
                }}>
                {data.rating}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: '#fff',
                width: '30%',
                height: 48,
                borderRadius: 8,
                borderWidth: 0.4,
              }}>
              <Picker
                selectedValue={selectedValue}
                onValueChange={itemValue => setSelectedValue(itemValue)}>
                <Picker.Item label="1" value="option1" />
                <Picker.Item label="2" value="option2" />
                <Picker.Item label="3" value="option3" />
                <Picker.Item label="4" value="option4" />
                <Picker.Item label="5" value="option5" />
                <Picker.Item label="6" value="option6" />
              </Picker>
            </View>
            <View style={{position: 'absolute', right: 30, top: 170}}>
              <Text style={{color: 'black', fontSize: 16, fontWeight: '700'}}>
                {'Stock ' + data.stock}
              </Text>
            </View>

            {bank == 0 ? (
              <View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 12,
                  }}>
                  <Text
                    style={{fontWeight: '700', fontSize: 13, color: 'black'}}>
                    Bank Offers
                  </Text>
                  <TouchableOpacity onPress={() => setBank(!bank)}>
                    <Text
                      style={{
                        fontWeight: '700',
                        fontSize: 13,
                        color: 'blue',
                        marginRight: 28,
                        fontFamily: 'ExtraLiht ',
                      }}>
                      +More
                    </Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '400',
                      fontFamily: 'ExtraLiht ',
                    }}>
                    15% Instant Discount on AU Credit Cards,Min Spend
                    Rs,20000,Max,Discount Rs 1,000..
                  </Text>
                </View>
              </View>
            ) : (
              <View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 12,
                  }}>
                  <Text
                    style={{fontWeight: '700', fontSize: 13, color: 'black'}}>
                    Bank Offers
                  </Text>
                  <TouchableOpacity onPress={() => setBank(!bank)}>
                    <Text
                      style={{
                        fontWeight: '700',
                        fontSize: 13,
                        color: 'blue',
                        marginRight: 28,
                        fontFamily: 'ExtraLiht ',
                      }}>
                      Back
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{marginTop: 10}}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '400',
                      fontFamily: 'ExtraLiht ',
                    }}>
                    ICICI Bank debit cards make online shopping way easier. From
                    cashback to discounts on shopping through e-stores, ICICI
                    Bank offers a huge range of offers to their cardholders. The
                    bank provides online hopping offers on different categories
                    such as electronics, apparels, and many more.
                  </Text>
                  <Text
                    style={{
                      fontWeight: '800',
                      fontSize: 13,
                      color: 'black',
                      marginTop: 6,
                    }}>
                    State (SBI)!
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '400',
                      fontFamily: 'ExtraLiht ',
                    }}>
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: '400',
                        fontFamily: 'ExtraLiht ',
                      }}>
                      The State Bank of India (SBI) is the largest public sector
                      bank in India. It has a significant network of branches
                      and a wide range of financial products and services.
                    </Text>
                  </Text>
                </View>
              </View>
            )}

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
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 12,
              }}>
              <Text style={{fontWeight: '600', color: 'black'}}>
                EMI option available
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Viewplan')}>
                <Text
                  style={{
                    fontWeight: '600',
                    color: '#d60443',
                    marginRight: 20,
                  }}>
                  View Plan.
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{fontFamily: 'ExtraLiht ', fontSize: 11}}>
              EMI starting from Rs.15/Month
            </Text>
            <View
              style={{
                backgroundColor: '#dbd7d8',
                width: windowWidth,
                height: 70,
                marginLeft: -10,
                marginTop: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#d5e0a4',
                  alignSelf: 'center',

                  width: '90%',
                  height: 50,
                  marginTop: 12,
                  borderRadius: 4,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 14,
                  }}>
                  <Text style={{color: '#c48218', fontWeight: '700'}}>
                    {coupon}
                  </Text>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: '#ba0761',
                        borderRadius: 30,
                        marginLeft: 80,
                      }}>
                      <Icon
                        name="chevron-right"
                        type="font-awesome"
                        color="#fff"
                        size={20}
                        style={Styles.ImageSource}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
                <Text style={{marginLeft: 32, fontSize: 10}}>
                  by Viewing 3 T-Shirts
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 12,
              }}>
              <Text style={{fontSize: 13, fontWeight: '700', color: '#120f10'}}>
                Select size
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Sizechart')}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: '700',
                    color: '#cc0468',
                    marginRight: 14,
                  }}>
                  Size chart
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{fontSize: 13}}>Garment Measurement Chest 41.0in</Text>

            {size == 0 ? (
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 16,
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity
                  onPress={() => setSize(!size)}
                  style={{
                    borderWidth: 1,
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                  }}>
                  <Text style={{textAlign: 'center', marginTop: 9}}>M</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setSize(!size)}
                  style={{
                    borderWidth: 1,
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                  }}>
                  <Text style={{textAlign: 'center', marginTop: 9}}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                  }}>
                  <Text style={{textAlign: 'center', marginTop: 9}}>U</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                  }}>
                  <Text style={{textAlign: 'center', marginTop: 9}}>V</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                  }}>
                  <Text style={{textAlign: 'center', marginTop: 9}}>T</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 16,
                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity
                  onPress={() => setSize(!size)}
                  style={{
                    borderWidth: 1,
                    backgroundColor: '#130459',
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                  }}>
                  <Text
                    style={{textAlign: 'center', marginTop: 9, color: '#fff'}}>
                    M
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                  }}>
                  <Text style={{textAlign: 'center', marginTop: 9}}>S</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,

                    width: 40,
                    height: 40,
                    borderRadius: 50,
                  }}>
                  <Text style={{textAlign: 'center', marginTop: 9}}>U</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                  }}>
                  <Text style={{textAlign: 'center', marginTop: 9}}>V</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                  }}>
                  <Text style={{textAlign: 'center', marginTop: 9}}>T</Text>
                </TouchableOpacity>
              </View>
            )}

            <View style={{flex: 1, flexDirection: 'row'}}>
              {dil == 0 ? (
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    borderWidth: 0.4,
                    width: '44%',
                    height: 44,
                    marginTop: 14,
                    borderRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity onPress={() => setDil(!dil)} style={{}}>
                    <Icon
                      name="heart"
                      type="font-awesome"
                      color="gray"
                      size={20}
                      style={Styles.ImageSource}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontWeight: '700',
                      color: '#1a1618',
                      fontSize: 13,
                    }}>
                    WISHITIS
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    borderWidth: 0.4,
                    width: '44%',
                    height: 44,
                    marginTop: 14,
                    borderRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity onPress={() => setDil(!dil)} style={{}}>
                    {/* <Icon
                      name="heart"
                      type="font-awesome"
                      color="red"
                      size={20}
                      
                    /> */}
                    <Image
                      source={{
                        uri: 'https://media.istockphoto.com/id/936563406/vector/heart-shape.jpg?s=612x612&w=0&k=20&c=YvhbqoOTOc3GNndlvgTefqCZIM9HJuR7wrk-gw4sL8g=',
                      }}
                      style={{width: 30, height: 30}}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontWeight: '700',
                      color: '#1a1618',
                      fontSize: 13,
                    }}>
                    WISHITED
                  </Text>
                </View>
              )}

              <TouchableOpacity
                style={{
                  borderWidth: 0.4,
                  backgroundColor: '#b5045c',
                  width: '50%',
                  height: 44,
                  marginTop: 14,
                  borderRadius: 4,
                  marginLeft: 8,
                }}>
                <Text
                  style={{
                    marginLeft: 66,
                    marginTop: 13,
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: '800',
                  }}>
                  ADD TO BAG
                </Text>
                <View style={{position: 'absolute', bottom: 13, left: 40}}>
                  <Icon
                    name="shopping-bag"
                    type="font-awesome"
                    color="#fff"
                    size={22}
                    style={Styles.ImageSource}
                  />
                </View>
              </TouchableOpacity>
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
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setArrow(1), setColorss(2);
                }}>
                <Text
                  style={{
                    color: colorss == 2 ? '#6d3eab' : 'black',
                    fontSize: 16,
                    fontWeight: '700',
                  }}>
                  Highlights
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setArrow(2), setColorss(1);
                }}>
                <Text
                  style={{
                    color: colorss == 1 ? '#019183' : 'black',
                    fontSize: 16,
                    fontWeight: '700',
                  }}>
                  {' '}
                  Description
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setArrow(3), setColorss(0);
                }}>
                <Text
                  style={{
                    color: colorss == 0 ? '#cc2208' : 'black',
                    fontSize: 16,
                    fontWeight: '700',
                    marginRight: 12,
                  }}>
                  Specifications
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{marginLeft: -10}}>
              <Text
                style={{
                  borderBottomWidth: 1,
                  width: windowWidth,
                  borderBottomColor: '#cfcdcc',
                }}></Text>
            </View>
            {arrow == 1 ? (
              <View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{fontWeight: '700', fontSize: 13, color: '#6d3eab'}}>
                    Product Highlights
                  </Text>
                  {/* <TouchableOpacity onPress={() => setArrow(1)}>
                      <Icon
                        name="chevron-up"
                        type="font-awesome"
                        color="black"
                        size={24}
                        style={{marginRight: 26}}
                      />
                    </TouchableOpacity> */}
                </View>
                <View>
                  <Text style={{fontSize: 12, marginTop: 4, color: '#1f1a30'}}>
                    Men Running Shoes Run Cushion-
                  </Text>
                </View>

                <View style={{flex: 1, alignSelf: 'center', marginTop: 12}}>
                  <Image
                    source={{uri: data.thumbnail}}
                    style={{width: 330, height: 250}}
                  />
                </View>

                <View style={{flex: 1, marginTop: 12}}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: 'SemiBold',
                      color: '#1f1a30',
                    }}>
                    Shoes Online- Shop shoes online for Men, Women & Kids at 70%
                    Discount in BFF.Shop from the latest collection of shoes
                    available in various brands If you are looking for stylish
                    men's shoes online, then you are bound to be spoiled for
                    choice. The numerous trendy types and footwear concepts
                    available ..
                  </Text>
                </View>
              </View>
            ) : arrow == 2 ? (
              <View>
                <View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        fontWeight: '700',
                        fontSize: 13,
                        color: '#019183',
                      }}>
                      Product Description
                    </Text>
                    {/* <TouchableOpacity onPress={() => setArrow(2)}>
                    <Icon
                      name="chevron-down"
                      type="font-awesome"
                      color="black"
                      size={24}
                      style={{marginRight: 26}}
                    />
                  </TouchableOpacity> */}
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        marginTop: 4,
                        fontSize: 13,
                        fontWeight: '700',
                        color: '#2c0130',
                      }}>
                      Ultra High Resolution AI Triple Camera with 108MP
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'SemiBold',
                        color: '#1f1a30',
                      }}>
                      This phone comes with a power packed 108 MP primary camera
                      along with a 2MP depth sensor in addition to an AI lens
                      that comes with quad LED flash. The camera has enough
                      pixels to record every moment in detail. Using the Dual
                      View video, capture all your expressions on the front
                      camera while taking beautiful pictures on the back camera.
                      You can witness a variety of preset templates on the Film
                      Mode and can easily minimise the shooting expense and
                      simplify steps to take photos/videos.
                    </Text>
                  </View>

                  {/* <View style={{flex: 1, alignSelf: 'center', marginTop: 12}}>
                  <Image
                    source={{uri: data.thumbnail}}
                    style={{width: 330, height: 250}}
                  />
                </View> */}

                  <View style={{flex: 1, marginTop: 12}}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '700',
                        color: '#2c0130',
                      }}>
                      RAM Capacity Up to 16GB
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'SemiBold',
                        color: '#1f1a30',
                      }}>
                      With ample RAM of up to 16 GB (8GB of in-built RAM with
                      8GB of ROM through MemFusion technology), you will not
                      experience any more lagging or slowdown even while using
                      multiple applications. Those who like to play high-end
                      games, do a lot of video editing, and stream huge content
                      can enjoy the benefits of this feature.
                    </Text>
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '700',
                        color: '#2c0130',
                      }}>
                      Internal Storage of Up to 256 GB
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'SemiBold',
                        color: '#1f1a30',
                      }}>
                      Storing a heap of content without the need for SD cards or
                      external storage devices comes as a great relief for you,
                      as this feature comes with huge storage benefits. Store
                      volumes of photos, videos, media files, music, and other
                      content without worrying about storage space.
                    </Text>
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '700',
                        color: '#2c0130',
                      }}>
                      Powerful 6080 6nm Dimensity Processor
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'SemiBold',
                        color: '#1f1a30',
                      }}>
                      This gaming smartphone features a powerful 6080 6nm 5G
                      processor that offers 20% quick in-game performance with
                      the availability of Arm Cortex-A76 frequencies that
                      operate up to 2.4 GHz. This provides swift app response
                      and more FPS in games, in addition to stable and connected
                      networks. The 6nm processor not only allows for quick
                      performance but also aids in maintaining low power
                      consumption.
                    </Text>
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '700',
                        color: '#2c0130',
                      }}>
                      Dual Sim Mobile with 14 5G Bands
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'SemiBold',
                        color: '#1f1a30',
                      }}>
                      You can use a number of applications without experiencing
                      any lag on this Infinix Note 30 5G smartphone, as this
                      phone has a dual 5G connection capability. You will get 14
                      5G bands, which means you can enjoy unlimited usage
                      without any interruption and can be used both in India and
                      abroad. Featuring a fast WiFi 6 with 2x2 MIMO that offers
                      superfast and stable internet connection.
                    </Text>
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: '700',
                        color: '#2c0130',
                      }}>
                      4D Vibration with an X- Axis Linear Motor
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'SemiBold',
                        color: '#1f1a30',
                      }}>
                      Play games like real life, where you feel every action so
                      loud and clear as if in the battleground, with the
                      presence of an X-Axis linear motor that offers you strong
                      vibrations during action sequences. The 4D gaming
                      vibration simply enhances the thrill of the game you play.
                    </Text>
                  </View>
                </View>
              </View>
            ) : arrow == 3 ? (
              <View style={{marginTop: 10}}>
                <Text
                  style={{fontWeight: '700', fontSize: 15, color: '#ba1f07'}}>
                  General
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'gray',

                      fontSize: 15,
                    }}>
                    In The Box
                  </Text>
                  <Text
                    style={{fontSize: 15, color: '#272530', marginLeft: 98}}>
                    Handset, Adaptor,
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'gray',

                      fontSize: 15,
                    }}>
                    Model Number
                  </Text>
                  <Text
                    style={{fontSize: 15, color: '#272530', marginLeft: 71}}>
                    X671122
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'gray',

                      fontSize: 15,
                    }}>
                    Color Name
                  </Text>
                  <Text
                    style={{fontSize: 15, color: '#272530', marginLeft: 90}}>
                    Sunset Gold
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'gray',

                      fontSize: 15,
                    }}>
                    Model Name
                  </Text>
                  <Text
                    style={{fontSize: 15, color: '#272530', marginLeft: 84}}>
                    Note 30 5G
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'gray',

                      fontSize: 15,
                    }}>
                    Browse Type
                  </Text>
                  <Text
                    style={{fontSize: 15, color: '#272530', marginLeft: 82}}>
                    Smartphones
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',

                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'gray',

                      fontSize: 15,
                    }}>
                    SIM Type
                  </Text>
                  <Text
                    style={{fontSize: 15, color: '#272530', marginLeft: 104}}>
                    Dual Sim
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'gray',

                      fontSize: 15,
                    }}>
                    Touchscreen
                  </Text>
                  <Text
                    style={{fontSize: 15, color: '#272530', marginLeft: 78}}>
                    Yes
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'gray',

                      fontSize: 15,
                    }}>
                    OTG Compatible
                  </Text>
                  <Text
                    style={{fontSize: 15, color: '#272530', marginLeft: 60}}>
                    yes
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'gray',

                      fontSize: 15,
                    }}>
                    Sound Enhan
                  </Text>
                  <Text
                    style={{fontSize: 15, color: '#272530', marginLeft: 80}}>
                    JBL, DTS,
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
                <View style={{marginTop: 10}}>
                  <Text
                    style={{fontWeight: '700', fontSize: 15, color: '#0c0614'}}>
                    Memory & Storage Features
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        color: 'gray',

                        fontSize: 15,
                      }}>
                      Internal Storage
                    </Text>
                    <Text
                      style={{fontSize: 15, color: '#272530', marginLeft: 80}}>
                      128 GB
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        color: 'gray',

                        fontSize: 15,
                      }}>
                      RAM
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#272530',
                        marginLeft: '46%',
                      }}>
                      8 GB
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        color: 'gray',

                        fontSize: 15,
                      }}>
                      Expandable Storage
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#272530',
                        marginLeft: '16%',
                      }}>
                      2 TB
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        color: 'gray',

                        fontSize: 15,
                      }}>
                      Supported Memory
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#272530',
                        marginLeft: '17%',
                      }}>
                      MicroSD
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        color: 'gray',

                        fontSize: 15,
                      }}>
                      Memory Card Slot Type
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#272530',
                        marginLeft: '8%',
                      }}>
                      Dedicated Slot
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                    }}>
                    <Text
                      style={{
                        color: 'gray',

                        fontSize: 15,
                      }}>
                      Call Log Memory
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#272530',
                        marginLeft: '22%',
                      }}>
                      Yes
                    </Text>
                  </View>
                </View>
              </View>
            ) : null}

            <View style={{marginLeft: -10}}>
              <Text
                style={{
                  borderBottomWidth: 10,
                  width: windowWidth,
                  borderBottomColor: '#cfcdcc',
                }}></Text>
            </View>

            <View
              style={{
                flex: 1,
                marginTop: 10,
                flexDirection: 'row',
                marginLeft: 10,
              }}>
              <TouchableOpacity
                style={{
                  width: '46%',
                  height: 44,
                  backgroundColor: '#a80755',
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 10,
                    color: '#f7f5f5',
                    fontWeight: '800',
                    fontSize: 16,
                  }}>
                  Add to Cart
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '46%',
                  height: 44,
                  marginLeft: 12,
                  backgroundColor: '#f5d50a',
                  borderRadius: 4,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 10,
                    color: '#24231b',
                    fontSize: 15,
                    fontWeight: '700',
                  }}>
                  Buy Now
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1, marginTop: 6}}>
              <Text style={{textAlign: 'center'}}>
                Create By @Upendra Singh
              </Text>
            </View>
          </View>
        </View>
        {/* {product.map(val => {
          return (
           
          );
        })} */}
        {/* **************************** */}
        {/* {product.images.map((img, key) => {
          console.log(img)
          return (
            <View style={{height: 200, width: 200}}>
              <Image style={{height: 200, width: 200}} source={{uri: img}} />
            </View>
          );
        })} */}

        {/* );
        }}
      /> */}
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
export default Productapi;
