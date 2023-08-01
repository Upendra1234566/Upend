import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Switch,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Upendra = () => {
  const SuperCoin = [
    {
      id: 0,
      title: 'Skin Beauty Serum.',
      price: 460,
      thumbnail: 'https://i.dummyjson.com/data/products/19/thumbnail.jpg',
      qty: 0,
    },
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
    {
      id: 3,
      title: 'Samsung Universe 9',
      price: 1249,
      thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 4,
      title: 'OPPOF19',
      price: 280,
      thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 5,
      title: 'Huawei P30',
      price: 499,
      thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 6,
      title: 'MacBook Pro',
      price: 1749,
      thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
      qty: 0,
    },
    {
      id: 7,
      title: 'Samsung Galaxy Book',
      price: 1499,
      thumbnail: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 8,
      title: 'Microsoft Surface Laptop 4',
      price: 1499,
      thumbnail: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 9,
      title: 'Infinix INBOOK',
      price: 1099,
      thumbnail: 'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 10,
      title: 'HP Pavilion 15-DK1056WM',
      price: 1099,
      thumbnail: 'https://i.dummyjson.com/data/products/10/thumbnail.jpeg',
      qty: 0,
    },
    {
      id: 11,
      title: 'perfume Oil',
      price: 13,
      thumbnail: 'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 12,
      title: 'Brown Perfume',
      price: 40,
      thumbnail: 'https://i.dummyjson.com/data/products/12/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 13,
      title: 'Fog Scent Xpressio Perfume',
      price: 13,
      thumbnail: 'https://i.dummyjson.com/data/products/13/thumbnail.webp',
      qty: 0,
    },
    {
      id: 14,
      title: 'Non-Alcoholic Concentrated Perfume Oil',
      price: 120,
      thumbnail: 'https://i.dummyjson.com/data/products/14/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 15,
      title: 'Eau De Perfume Spray',
      price: 30,
      thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
      qty: 0,
    },
    {
      id: 16,
      title: 'Hyaluronic Acid Serum',
      price: 19,
      thumbnail: 'https://i.dummyjson.com/data/products/16/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 17,
      title: 'Tree Oil 30ml',
      price: 12,
      thumbnail: 'https://i.dummyjson.com/data/products/17/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 18,
      title: 'Oil Free Moisturizer 100ml',
      price: 40,
      thumbnail: 'https://i.dummyjson.com/data/products/18/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 19,
      title: 'Skin Beauty Serum.',
      price: 46,
      thumbnail: 'https://i.dummyjson.com/data/products/19/thumbnail.jpg',
      qty: 0,
    },

    {
      id: 20,
      title: 'Freckle Treatment Cream- 15gm',
      price: 700,
      thumbnail: 'https://i.dummyjson.com/data/products/20/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 16,
      title: 'Hyaluronic Acid Serum',
      price: 19,
      thumbnail: 'https://i.dummyjson.com/data/products/16/thumbnail.jpg',
      qty: 0,
    },
  ];

  const Superhit = [
    {
      id: 17,
      title: 'Tree Oil 30ml',
      price: 12,
      thumbnail: 'https://i.dummyjson.com/data/products/17/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 18,
      title: 'Oil Free Moisturizer 100ml',
      price: 40,
      thumbnail: 'https://i.dummyjson.com/data/products/18/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 19,
      title: 'Skin Beauty Serum.',
      price: 46,
      thumbnail: 'https://i.dummyjson.com/data/products/19/thumbnail.jpg',
      qty: 0,
    },
  ];

  const Super = [
    {
      id: 0,
      title: 'Skin Beauty Serum.',
      price: 460,
      thumbnail: 'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 1,
      title: 'iPhone 9',
      price: 549,
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 2,
      title: 'iPhone X',
      price: 899,
      thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
      qty: 0,
    },
  ];

  const Duper = [
    {
      id: 17,
      title: 'Tree Oil 30ml',
      price: 12,
      thumbnail: 'https://i.dummyjson.com/data/products/17/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 18,
      title: 'Oil Free Moisturizer 100ml',
      price: 40,
      thumbnail: 'https://i.dummyjson.com/data/products/18/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 19,
      title: 'Skin Beauty Serum.',
      price: 46,
      thumbnail: 'https://i.dummyjson.com/data/products/19/thumbnail.jpg',
      qty: 0,
    },
    {
      id: 16,
      title: 'Hyaluronic Acid Serum',
      price: 19,
      thumbnail: 'https://i.dummyjson.com/data/products/16/thumbnail.jpg',
      qty: 0,
    },
  ];

  useEffect(() => {
    getProduts('laptops');
  }, []);

  useEffect(() => {
    category1();
    getdata1();
  }, []);
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState(0);
  const [cross, setCross] = useState('');
  const [isEnabled, setIsEnabled] = useState('');
  const [iconbar, setIconbar] = useState('Noida');
  const [curreentindex, setCureentindex] = useState(0);

  const getProduts = async e => {
    const Url = 'https://dummyjson.com/products/category/' + e;
    let result = await fetch(Url);

    result = await result.json();
    setProducts(result.products);
  };

  const getdata1 = async () => {
    const url = 'https://dummyjson.com/products/';
    let result = await fetch(url);
    result = await result.json();
    setProduct(result.images);
    console.log(result.images);

    // console.log('kkkkkk', product.images);
    // alert(product)
    // product.map((val) =>{
    //   console.log(val)
    //   return

    // })
  };

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const category1 = async () => {
    const categoryy = 'https://dummyjson.com/products/categories';
    let result1 = await fetch(categoryy);
    result1 = await result1.json();
    setCategory(result1);
    //console.log(result1);
  };
  const navigation = useNavigation();
  return (
    <View style={Styles.container}>
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
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon
                  name="align-left"
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
              <TouchableOpacity
                 onPress={()=> navigation.navigate('AddCard')}
              >
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
      <ScrollView>
        <View
          style={{
            backgroundColor: '#e1e2f7',
            borderRadius: 10,
            width: '94%',
            height: 48,
            marginTop: 12,
            marginLeft: 10,
            borderRadius: 4,
            padding: 15,
            shadowColor: '#fff',
            shadowOffset: {width: 0, height: 4},
            shadowOpacity: 0.9,
            shadowRadius: 40,
            elevation: 3,
          }}>
          <TextInput
            placeholder="Search for products"
            style={{
              marginLeft: 14,
              width: '86%',
              height: 44,
              position: 'absolute',
              top: 1,
            }}
          />
          <View style={Styles.paddView}>
            <TouchableOpacity>
              <Icon
                name="search"
                type="font-awesome"
                color="black"
                size={20}
                style={Styles.ImageSource}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={{position: 'absolute', top: 77}}>
        <Text style={{fontSize: 10, fontWeight: '500', marginLeft: 12}}>
          Brand Mall
        </Text>

        <View style={{marginRight: '85%'}}>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View> */}

        <View style={{marginTop: 10}}>
          <FlatList
            data={products}
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled={true}
            onScroll={e => {
              const x = e.nativeEvent.contentOffset.x;
              setCureentindex((x / windowWidth).toFixed(0));
            }}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    flex: 1,
                    width: windowWidth,
                    height: windowHeight / 4,
                  }}>
                  <View>
                    <Image
                      source={{uri: item.thumbnail}}
                      style={{width: '100%', height: '100%'}}
                    />
                  </View>
                </View>
              );
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            //backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            width: windowWidth,
            position: 'absolute',
            bottom: 2300,
          }}>
          {products.map((item, index) => {
            return (
              <View
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: 10,
                  backgroundColor:
                    curreentindex == index ? '#66faf7' : '#838e8f',
                  margin: 2,
                  marginTop: 20,
                }}></View>
            );
          })}
        </View>

        <View>
          <FlatList
            data={SuperCoin}
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled={true}
            renderItem={({item}) => {
              return (
                <View style={{marginTop: 10}}>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: '#ebe6ea',
                        borderRadius: 50,
                        width: 50,
                        height: 50,
                        margin: 10,
                        marginLeft: 12,
                      }}>
                      <Image
                        source={{uri: item.thumbnail}}
                        style={{
                          width: 35,
                          height: 35,
                          borderRadius: 50,
                          marginLeft: 8,
                          marginTop: 8,
                        }}
                      />
                    </View>
                    <Text
                      style={{
                        marginLeft: 20,
                        marginBottom: 4,
                        fontSize: 10,
                        fontWeight: '600',
                        color: '#171624',
                      }}>
                      {item.title.length > 8
                        ? item.title.substring(0, 8) + ''
                        : item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View style={{marginLeft: -10}}>
          <Text
            style={{
              borderBottomWidth: 0.3,
              width: windowWidth,
              borderBottomColor: '#cfcdcc',
            }}></Text>
        </View>
        <View>
          <FlatList
            data={Super}
            numColumns={3}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    backgroundColor: '#e1e1e8',
                    width: 100,
                    height: 130,
                    margin: 8,
                    marginLeft: 10,
                    borderRadius: 4,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 4},
                    shadowOpacity: 0.8,
                    shadowRadius: 40,
                    elevation: 3,
                  }}>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: '#ebe6ea',

                        width: 90,
                        height: 90,
                      }}>
                      <Image
                        source={{uri: item.thumbnail}}
                        style={{
                          width: 100,
                          height: 80,
                          borderRadius: 4,
                        }}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: '600',
                        color: '#0d0d14',
                        textAlign: 'center',
                      }}>
                      Up to 80% Off
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: '600',
                          margin: 4,
                          textAlign: 'center',
                          marginLeft: 16,
                          color: '#03990b',

                          textDecorationLine: 'line-through',
                        }}>
                        $1099
                      </Text>
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: '600',
                          margin: 4,
                          color: '#cf0e04',

                          textAlign: 'center',
                        }}>
                        $229
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>

        <View style={{marginLeft: 12, marginTop: 12, flexDirection: 'row'}}>
          <Text style={{fontSize: 17, fontWeight: '700', color: '#050303'}}>
            Recently Viewed Stores
          </Text>
        </View>
        <View>
          <FlatList
            data={SuperCoin}
            showsHorizontalScrollIndicator={false}
            horizontal
            //numColumns={3}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    backgroundColor: '#fff',
                    width: 100,
                    height: 130,
                    margin: 8,
                    marginTop: 10,
                    marginLeft: 10,
                    borderRadius: 4,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 4},
                    shadowOpacity: 0.8,
                    shadowRadius: 40,
                    elevation: 3,
                  }}>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: '#fff',

                        width: 90,
                        height: 90,
                      }}>
                      <Image
                        source={{uri: item.thumbnail}}
                        style={{
                          width: 100,
                          height: 90,
                          borderRadius: 4,
                        }}
                      />
                    </View>
                    <Text style={{textAlign: 'center', marginTop: 10}}>
                      {item.title.length > 8
                        ? item.title.substring(0, 8) + ''
                        : item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View style={{marginLeft: -10}}>
          <Text
            style={{
              borderBottomWidth: 0.6,
              width: windowWidth,
              borderBottomColor: '#cfcdcc',
            }}></Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 12}}>
          <Text style={{fontSize: 15, fontWeight: '700', color: '#34343b'}}>
            Sponsored
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#0c14f0',
              width: 70,
              height: 24,
              marginLeft: '52%',
              borderRadius: 4,
            }}>
            <Text style={{color: '#fff', textAlign: 'center', marginTop: 2}}>
              View all
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            data={Superhit}
            showsHorizontalScrollIndicator={false}
            horizontal
            //numColumns={3}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    backgroundColor: '#fff',
                    width: 100,
                    height: 130,
                    margin: 8,
                    marginTop: 10,
                    marginLeft: 10,
                    borderRadius: 4,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 4},
                    shadowOpacity: 0.8,
                    shadowRadius: 40,
                    elevation: 3,
                  }}>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: '#fff',

                        width: 90,
                        height: 90,
                      }}>
                      <Image
                        source={{uri: item.thumbnail}}
                        style={{
                          width: 100,
                          height: 96,
                          borderRadius: 4,
                        }}
                      />
                    </View>
                    <Text style={{textAlign: 'center', marginTop: 10}}>
                      {item.title.length > 8
                        ? item.title.substring(0, 8) + ''
                        : item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View style={{marginLeft: -10}}>
          <Text
            style={{
              borderBottomWidth: 0.6,
              width: windowWidth,
              borderBottomColor: '#cfcdcc',
            }}></Text>
        </View>
        <View>
          <FlatList
            data={Super}
            showsHorizontalScrollIndicator={false}
            horizontal
            //numColumns={3}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    backgroundColor: '#fff',
                    width: 100,
                    height: 130,
                    margin: 8,
                    marginTop: 10,
                    marginLeft: 10,
                    borderRadius: 4,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 4},
                    shadowOpacity: 0.8,
                    shadowRadius: 40,
                    elevation: 3,
                  }}>
                  <TouchableOpacity>
                    <View
                      style={{
                        backgroundColor: '#fff',

                        width: 90,
                        height: 90,
                      }}>
                      <Image
                        source={{uri: item.thumbnail}}
                        style={{
                          width: 100,
                          height: 96,
                          borderRadius: 4,
                        }}
                      />
                    </View>
                    <Text style={{textAlign: 'center', marginTop: 10}}>
                      {item.title.length > 8
                        ? item.title.substring(0, 8) + ''
                        : item.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View style={{flex: 1, backgroundColor: 'pink'}}>
          <View style={{flexDirection: 'row', marginLeft: 14, marginTop: 10}}>
            <Text style={{fontSize: 14, fontWeight: '700', color: '#3a3a40'}}>
              Top Selection
            </Text>
            <TouchableOpacity
             onPress={()=> navigation.navigate('TopSelection')}
              style={{
                backgroundColor: 'blue',
                width: 22,
                borderRadius: 50,
                height: 22,
                marginLeft: 205,
              }}>
              <Icon
                name="chevron-right"
                type="font-awesome"
                color="#fff"
                size={20}
                style={{marginLeft: 2}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={Duper}
              // showsHorizontalScrollIndicator={false}
              // horizontal
              numColumns={2}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      backgroundColor: '#fff',
                      width: '44%',
                      height: 220,
                      margin: 8,
                      marginTop: 10,
                      borderRadius: 4,
                      marginLeft: 13,
                      shadowColor: '#000',
                      shadowOffset: {width: 0, height: 4},
                      shadowOpacity: 0.8,
                      shadowRadius: 40,
                      elevation: 3,
                    }}>
                    <TouchableOpacity>
                      <View
                        style={{
                          width: 90,
                          height: 90,
                        }}>
                        <Image
                          source={{uri: item.thumbnail}}
                          style={{
                            width: 157,
                            height: 157,
                            borderWidth: 0.4,
                            borderRadius: 4,
                            marginHorizontal:0.8
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={{marginTop: 80}}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 13,
                          fontWeight: '700',
                          color: '#090a14',
                        }}>
                        {item.title.length > 16
                          ? item.title.substring(0, 16) + ''
                          : item.title}
                      </Text>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontWeight: '500',
                          color: '#04cc29',
                        }}>
                        Popular
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={Styles.allview}>
            {category.map((val, index) => {
              return (
                <View style={{flex: 1, backgroundColor: '#fff'}}>
                  <TouchableOpacity
                    onPress={() => getProduts(val)}
                    style={Styles.viewall}>
                    <Text>
                      {val.length > 10 ? val.substring(0, 10) + '' : val}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: '700',
              fontFamily: 'Poppins-SemiBoldltalic',
              fontSize: 26,
              marginLeft: 10,
              marginTop: 16,
            }}>
            Top Products
          </Text>
          <TouchableOpacity>
            <Text style={{marginRight: 20, marginTop: 20}}>Show all.</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={products}
          renderItem={({item, index}) => {
            return (
              <View style={Styles.flatlits}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Productapi', {id: item.id})
                  }>
                  <View style={Styles.txtflats}>
                    <View
                      style={{
                        position: 'absolute',
                        top: 20,
                        left: 10,
                      }}>
                      <Image
                        source={{uri: item.thumbnail}}
                        style={{width: 100, height: 110}}
                      />
                    </View>
                    <View
                      style={{
                        flex: 1,
                        position: 'absolute',
                        left: '35%',
                        top: 20,
                      }}>
                      <Text style={{fontWeight: '600'}}>
                        {item.description.length > 30
                          ? item.description.substring(0, 30) + '...'
                          : item.description}
                      </Text>
                      <Text style={{color: 'orange'}}>
                        * * * * {item.rating}
                      </Text>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: '700',
                          fontSize: 18,
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          color: 'red',
                          fontWeight: '400',
                          marginLeft: 10,
                          textDecorationLine: 'line-through',
                        }}>
                        {'$' + item.price}
                      </Text>
                      <Text style={{color: 'green', fontWeight: '600'}}>
                        {'Offer of  $' + item.discountPercentage}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  txt: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
    color: '#2e2d2c',
    fontWeight: '600',
  },
  viewtxt: {
    marginLeft: 10,
    fontSize: 26,
    fontWeight: '700',
    marginTop: 6,
    color: '#171716',
    fontFamily: 'Poppins-Light',
  },
  txtView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconview: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
    color: '#94928e',
  },

  paddView: {
    position: 'absolute',
    right: 20,
    top: 14,
  },
  allview: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,

    height: windowHeight / 15,
  },
  viewall: {
    flex: 1,
    borderWidth: 0.4,
    width: 98,
    height: 36,
    marginVertical: 4,
    marginHorizontal: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Boldltalic',
    marginTop: 6,
  },
  headphone: {
    borderWidth: 0.4,
    width: 90,
    height: 36,
    marginVertical: 4,
    //    marginHorizontal: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Boldltalic',
  },
  Earphones: {
    borderWidth: 0.4,
    width: 90,
    height: 36,
    marginVertical: 4,
    //    marginHorizontal: 20,
    margin: 4,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Boldltalic',
  },

  watch: {
    borderWidth: 0.4,
    width: '20%',
    height: '26%',
    marginTop: 30,

    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Boldltalic',
  },
  tvView: {
    borderWidth: 0.4,
    width: '10%',
    height: '26%',
    marginTop: 30,

    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Poppins-Boldltalic',
  },

  vite: {
    borderWidth: 0.4,
    width: '20%',
    height: '26%',
    marginTop: 30,

    marginLeft: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  flatlits: {
    //justifyContent: 'center',
    width: '96%',
    height: 150,
    // marginTop: '5%',
    margin: 10,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#0d051a',
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  txtflats: {},
});
export default Upendra;
