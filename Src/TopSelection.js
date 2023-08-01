import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import RBSheet from 'react-native-raw-bottom-sheet';
import {CheckBox, Image} from 'react-native-elements';
import {RadioButton} from 'react-native-paper';
import Lifecycle from './Lifecycle';
import Headercc from '../Headercc';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TopSelection = ({navigation}) => {
  const [search, setSearch] = useState(0);
  const [iconbar, setIconbar] = useState('Noida');
  const [cross, setCross] = useState('');
  const refRBSheet = useRef();
  const refRBsheet = useRef();
  const refdata = useRef();
  const refUP = useRef();
  const refPS = useRef();
  const refPSS = useRef();
  const refRAM = useRef();
  //const [checked, setChecked] = useState(false);
  const [checked, setChecked] = useState('first');
  const [dataa, setDataa] = useState();
  const [check, setCheck] = useState(0);
  const [check1, setCheck1] = useState(0);
  const [check2, setCheck2] = useState(0);
  const [check3, setCheck3] = useState(0);
  const [check4, setCheck4] = useState(0);

  const handleCheck = () => {
    setChecked(!checked);
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#fff',
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
      </View>

      <ScrollView horizontal={true}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => refRBSheet.current.open()}
              style={{
                width: 90,
                height: 40,
                borderWidth: 1,
                borderRadius: 50,
                margin: 10,
              }}>
              <View style={{flexDirection: 'row', marginLeft: 6}}>
                <Text style={{textAlign: 'center', marginTop: 8}}>Sort by</Text>
                <Icon
                  name="chevron-down"
                  type="font-awesome"
                  color="black"
                  size={20}
                  style={{
                    textAlign: 'center',
                    marginTop: 8,
                    marginLeft: 10,
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => refRBsheet.current.open()}
              style={{
                width: 90,
                height: 40,
                borderWidth: 1,
                borderRadius: 50,
                margin: 10,
              }}>
              <View style={{flexDirection: 'row', marginLeft: 6}}>
                <Icon
                  name="divide"
                  type="font-awesome"
                  color="black"
                  size={20}
                  style={{
                    marginTop: 8,
                    marginLeft: 6,
                  }}
                />
                <Text style={{textAlign: 'center', marginTop: 8}}>Filter</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => refUP.current.open()}
              style={{
                width: 96,
                height: 40,
                borderWidth: 1,
                borderRadius: 50,
                margin: 10,
              }}>
              <View style={{flexDirection: 'row', marginLeft: 6}}>
                <Icon
                  name="divide"
                  type="font-awesome"
                  color="black"
                  size={20}
                  style={{
                    marginTop: 8,
                    marginLeft: 1,
                  }}
                />
                <Text style={{textAlign: 'center', marginTop: 8}}>Compare</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => refPS.current.open()}
              style={{
                width: 90,
                height: 40,
                borderWidth: 1,
                borderRadius: 50,
                margin: 10,
              }}>
              <View style={{flexDirection: 'row', marginLeft: 6}}>
                <Text
                  style={{textAlign: 'center', marginTop: 8, marginLeft: 10}}>
                  Price{' '}
                </Text>
                <Icon
                  name="chevron-down"
                  type="font-awesome"
                  color="black"
                  size={20}
                  style={{
                    textAlign: 'center',
                    marginTop: 8,
                    marginLeft: 10,
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => refPSS.current.open()}
              style={{
                width: 90,
                height: 40,
                borderWidth: 1,
                borderRadius: 50,
                margin: 10,
              }}>
              <View style={{flexDirection: 'row', marginLeft: 6}}>
                <Text
                  style={{textAlign: 'center', marginTop: 8, marginLeft: 10}}>
                  Brand{' '}
                </Text>
                <Icon
                  name="chevron-down"
                  type="font-awesome"
                  color="black"
                  size={20}
                  style={{
                    textAlign: 'center',
                    marginTop: 8,
                    marginLeft: 10,
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => refRAM.current.open()}
              style={{
                width: 90,
                height: 40,
                borderWidth: 1,
                borderRadius: 50,
                margin: 10,
              }}>
              <View style={{flexDirection: 'row', marginLeft: 6}}>
                <Text
                  style={{textAlign: 'center', marginTop: 8, marginLeft: 10}}>
                  RAM{' '}
                </Text>
                <Icon
                  name="chevron-down"
                  type="font-awesome"
                  color="black"
                  size={20}
                  style={{
                    textAlign: 'center',
                    marginTop: 8,
                    marginLeft: 10,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={{}}>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: 'blue',
            },
          }}>
          <Text style={{marginLeft: 12}}>SORT BY</Text>
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
              marginTop: 10,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: 'black',
                marginLeft: 12,
              }}>
              Relevance
            </Text>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('first'), refRBSheet.current.close();
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 3,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: 'black',
                marginLeft: 12,
              }}>
              Newest First
            </Text>
            <RadioButton
              value="first"
              status={checked === 'five' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('five'), refRBSheet.current.close();
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 3,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: 'black',
                marginLeft: 12,
              }}>
              Propularity
            </Text>
            <RadioButton
              value="first"
              status={checked === 'Secound' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('Secound'), refRBSheet.current.close();
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 3,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: 'black',
                marginLeft: 12,
              }}>
              Price--Low to High
            </Text>
            <RadioButton
              value="first"
              status={checked === 'third' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('third'), refRBSheet.current.close();
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 3,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '600',
                color: 'black',
                marginLeft: 12,
              }}>
              Price-- High to Low
            </Text>
            <RadioButton
              value="first"
              status={checked === 'fourth' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('fourth'), refRBSheet.current.close();
              }}
            />
          </View>
        </RBSheet>

        <RBSheet
          height={windowHeight}
          openDuration={250}
          ref={refRBsheet}
          closeOnDragDown={false}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: 'blue',
            },
          }}>
          <View style={{flex: 1, backgroundColor: '#f5f2ed'}}>
            <Headercc />

            <View
              style={{
                flexDirection: 'row',
              }}>
              <Lifecycle SenddataChild={e => setDataa(e)} />
              {dataa == 4 ? (
                <View>
                  <View style={{flex: 1, marginLeft: 10}}>
                    <TextInput
                      style={{
                        width: 230,
                        borderRadius: 4,
                        height: 40,
                        marginTop: 20,
                        backgroundColor: '#edf1f7',
                        paddingLeft: 30,
                      }}
                      placeholder="Search here"
                    />
                    <View style={{position: 'absolute', top: 30, left: 8}}>
                      <Icon
                        name="search"
                        type="font-awesome"
                        color="black"
                        size={17}
                        style={Styles.ImageSource}
                      />
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
                            <Text style={{fontWeight: '400'}}>REDMI</Text>
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
                        <View
                          style={{position: 'absolute', bottom: 2, left: 40}}>
                          <Text style={{fontWeight: '400'}}>REDMI</Text>
                        </View>
                      </View>
                    )}
                    <View></View>
                  </View>
                </View>
              ) : dataa == 1 ? (
                <View style={{flex: 1, marginLeft: 12}}>
                  {check == 1 ? (
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
                          <Text style={{fontWeight: '400'}}>
                            Rs.20000-Rs.50000
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
                        <Text style={{fontWeight: '400'}}>
                          Rs.20000-Rs.50000
                        </Text>
                      </View>
                    </View>
                  )}

                  {check1 == 0 ? (
                    <View>
                      <View>
                        <TouchableOpacity onPress={() => setCheck1(!check1)}>
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
                          <Text style={{fontWeight: '400'}}>
                            Rs.50000 and Above
                          </Text>
                        </View>
                      </View>
                    </View>
                  ) : (
                    <View style={{borderRadius: 50, marginTop: 20}}>
                      <TouchableOpacity onPress={() => setCheck1(!check1)}>
                        <Image
                          source={{
                            uri: 'https://media.istockphoto.com/id/1177664322/vector/blue-flat-checkmark-icon.jpg?s=612x612&w=0&k=20&c=Y9YC-xqGF7iCa-TyGjgS1FmPPhY9U34cKzwmO2asNP4=',
                          }}
                          style={{width: 20, height: 20, borderWidth: 0.6}}
                        />
                      </TouchableOpacity>
                      <View style={{position: 'absolute', bottom: 2, left: 40}}>
                        <Text style={{fontWeight: '400'}}>
                          Rs.50000 and Above
                        </Text>
                      </View>
                    </View>
                  )}
                  {check2 == 0 ? (
                    <View>
                      <View>
                        <TouchableOpacity onPress={() => setCheck2(!check2)}>
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
                          <Text style={{fontWeight: '400'}}>
                            Rs.10000 and Below
                          </Text>
                        </View>
                      </View>
                    </View>
                  ) : (
                    <View style={{borderRadius: 50, marginTop: 20}}>
                      <TouchableOpacity onPress={() => setCheck2(!check2)}>
                        <Image
                          source={{
                            uri: 'https://media.istockphoto.com/id/1177664322/vector/blue-flat-checkmark-icon.jpg?s=612x612&w=0&k=20&c=Y9YC-xqGF7iCa-TyGjgS1FmPPhY9U34cKzwmO2asNP4=',
                          }}
                          style={{width: 20, height: 20, borderWidth: 0.6}}
                        />
                      </TouchableOpacity>
                      <View style={{position: 'absolute', bottom: 2, left: 40}}>
                        <Text style={{fontWeight: '400'}}>
                          Rs.10000 and Below
                        </Text>
                      </View>
                    </View>
                  )}
                  {check3 == 0 ? (
                    <View>
                      <View>
                        <TouchableOpacity onPress={() => setCheck3(!check3)}>
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
                          <Text style={{fontWeight: '400'}}>
                            Rs.10000 - Rs.15000
                          </Text>
                        </View>
                      </View>
                    </View>
                  ) : (
                    <View style={{borderRadius: 50, marginTop: 20}}>
                      <TouchableOpacity onPress={() => setCheck3(!check3)}>
                        <Image
                          source={{
                            uri: 'https://media.istockphoto.com/id/1177664322/vector/blue-flat-checkmark-icon.jpg?s=612x612&w=0&k=20&c=Y9YC-xqGF7iCa-TyGjgS1FmPPhY9U34cKzwmO2asNP4=',
                          }}
                          style={{width: 20, height: 20, borderWidth: 0.6}}
                        />
                      </TouchableOpacity>
                      <View style={{position: 'absolute', bottom: 2, left: 40}}>
                        <Text style={{fontWeight: '400'}}>
                          Rs.10000 - Rs.15000
                        </Text>
                      </View>
                    </View>
                  )}

                  {check4 == 0 ? (
                    <View>
                      <View>
                        <TouchableOpacity onPress={() => setCheck4(!check4)}>
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
                          <Text style={{fontWeight: '400'}}>
                            Rs.15000- Rs.20000
                          </Text>
                        </View>
                      </View>
                    </View>
                  ) : (
                    <View style={{borderRadius: 50, marginTop: 20}}>
                      <TouchableOpacity onPress={() => setCheck4(!check4)}>
                        <Image
                          source={{
                            uri: 'https://media.istockphoto.com/id/1177664322/vector/blue-flat-checkmark-icon.jpg?s=612x612&w=0&k=20&c=Y9YC-xqGF7iCa-TyGjgS1FmPPhY9U34cKzwmO2asNP4=',
                          }}
                          style={{width: 20, height: 20, borderWidth: 0.6}}
                        />
                      </TouchableOpacity>
                      <View style={{position: 'absolute', bottom: 2, left: 40}}>
                        <Text style={{fontWeight: '400'}}>
                          Rs.15000- Rs.20000
                        </Text>
                      </View>
                    </View>
                  )}
                </View>
              ) : dataa == 2 ? (
                <View style={{flex: 1, marginLeft: 12}}>
                  {check4 == 0 ? (
                    <View>
                      <View>
                        <TouchableOpacity onPress={() => setCheck4(!check4)}>
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
                          <Text style={{fontWeight: '400'}}>
                            Plus (FAsssured)
                          </Text>
                        </View>
                      </View>
                    </View>
                  ) : (
                    <View style={{borderRadius: 50, marginTop: 20}}>
                      <TouchableOpacity onPress={() => setCheck4(!check4)}>
                        <Image
                          source={{
                            uri: 'https://media.istockphoto.com/id/1177664322/vector/blue-flat-checkmark-icon.jpg?s=612x612&w=0&k=20&c=Y9YC-xqGF7iCa-TyGjgS1FmPPhY9U34cKzwmO2asNP4=',
                          }}
                          style={{width: 20, height: 20, borderWidth: 0.6}}
                        />
                      </TouchableOpacity>
                      <View style={{position: 'absolute', bottom: 2, left: 40}}>
                        <Text style={{fontWeight: '400'}}>
                          Plus (FAsssured)
                        </Text>
                      </View>
                    </View>
                  )}
                </View>
              ) : dataa == 5 ? (
                <View style={{flex: 1, marginLeft: 12}}>
                  {check4 == 0 ? (
                    <View>
                      <View>
                        <TouchableOpacity onPress={() => setCheck4(!check4)}>
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
                          <Text style={{fontWeight: '600'}}>4* & Above</Text>
                        </View>
                      </View>
                    </View>
                  ) : (
                    <View style={{borderRadius: 50, marginTop: 20}}>
                      <TouchableOpacity onPress={() => setCheck4(!check4)}>
                        <Image
                          source={{
                            uri: 'https://media.istockphoto.com/id/1177664322/vector/blue-flat-checkmark-icon.jpg?s=612x612&w=0&k=20&c=Y9YC-xqGF7iCa-TyGjgS1FmPPhY9U34cKzwmO2asNP4=',
                          }}
                          style={{width: 20, height: 20, borderWidth: 0.6}}
                        />
                      </TouchableOpacity>
                      <View style={{position: 'absolute', bottom: 2, left: 40}}>
                        <Text style={{fontWeight: '600'}}>4* & Above</Text>
                      </View>
                    </View>
                  )}

                  {check3 == 0 ? (
                    <View>
                      <View>
                        <TouchableOpacity onPress={() => setCheck3(!check3)}>
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
                          <Text style={{fontWeight: '600'}}>3* & Above</Text>
                        </View>
                      </View>
                    </View>
                  ) : (
                    <View style={{borderRadius: 50, marginTop: 20}}>
                      <TouchableOpacity onPress={() => setCheck3(!check3)}>
                        <Image
                          source={{
                            uri: 'https://media.istockphoto.com/id/1177664322/vector/blue-flat-checkmark-icon.jpg?s=612x612&w=0&k=20&c=Y9YC-xqGF7iCa-TyGjgS1FmPPhY9U34cKzwmO2asNP4=',
                          }}
                          style={{width: 20, height: 20, borderWidth: 0.6}}
                        />
                      </TouchableOpacity>
                      <View style={{position: 'absolute', bottom: 2, left: 40}}>
                        <Text style={{fontWeight: '600'}}>3* & Above</Text>
                      </View>
                    </View>
                  )}
                </View>
              ) : null}
            </View>
          </View>

          <View style={{backgroundColor: '#fff', height: 60}}>
            <Text style={{marginLeft: 14, fontWeight: '700', color: 'black'}}>
              55
            </Text>

            <View style={{flexDirection: 'row'}}>
              <Text style={{marginLeft: 14, fontWeight: '500', fontSize: 12}}>
                products found
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#f08c00',
                  borderRadius: 4,
                  width: '50%',
                  height: 40,

                  position: 'absolute',
                  bottom: -13,

                  right: 20,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 8,
                    color: '#fff',
                    fontWeight: '700',
                    fontSize: 17,
                  }}>
                  Apply
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>
        <RBSheet
          ref={refPS}
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
          <View style={{flex: 1, marginLeft: 12, flexDirection: 'row'}}>
            <View style={{marginTop: 16}}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => refPS.current.close()}>
                  <Icon
                    name="x"
                    type="font-awesome"
                    color="black"
                    size={22}
                    style={{
                      textAlign: 'center',
                    }}
                  />
                </TouchableOpacity>

                <Text
                  style={{
                    marginLeft: 14,
                    fontSize: 17,
                    fontWeight: '500',
                    color: 'black',
                  }}>
                  Filters
                </Text>
              </View>
              {check3 == 0 ? (
                <View>
                  <View style={{width: 130}}>
                    <TouchableOpacity onPress={() => setCheck3(!check3)}>
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
                        bottom: -5,
                        left: 40,
                      }}>
                      <Text style={{fontWeight: '600', color: 'black'}}>
                        Rs. 15000- Rs.20000
                      </Text>
                    </View>
                  </View>
                </View>
              ) : (
                <View style={{borderRadius: 50, marginTop: 20, width: 130}}>
                  <TouchableOpacity onPress={() => setCheck3(!check3)}>
                    <Image
                      source={{
                        uri: 'https://media.istockphoto.com/id/1177664322/vector/blue-flat-checkmark-icon.jpg?s=612x612&w=0&k=20&c=Y9YC-xqGF7iCa-TyGjgS1FmPPhY9U34cKzwmO2asNP4=',
                      }}
                      style={{width: 20, height: 20, borderWidth: 0.6}}
                    />
                  </TouchableOpacity>
                  <View style={{position: 'absolute', bottom: -5, left: 40}}>
                    <Text style={{fontWeight: '600', color: 'black'}}>
                      Rs. 15000- Rs.20000
                    </Text>
                  </View>
                </View>
              )}
              {check2 == 0 ? (
                <View>
                  <View style={{width: 130}}>
                    <TouchableOpacity onPress={() => setCheck2(!check2)}>
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
                        bottom: -5,
                        left: 40,
                      }}>
                      <Text style={{fontWeight: '600'}}>
                        Rs. 10000 and Below
                      </Text>
                    </View>
                  </View>
                </View>
              ) : (
                <View style={{borderRadius: 50, marginTop: 20, width: 130}}>
                  <TouchableOpacity onPress={() => setCheck2(!check2)}>
                    <Image
                      source={{
                        uri: 'https://media.istockphoto.com/id/1177664322/vector/blue-flat-checkmark-icon.jpg?s=612x612&w=0&k=20&c=Y9YC-xqGF7iCa-TyGjgS1FmPPhY9U34cKzwmO2asNP4=',
                      }}
                      style={{width: 20, height: 20, borderWidth: 0.6}}
                    />
                  </TouchableOpacity>
                  <View style={{position: 'absolute', bottom: -5, left: 40}}>
                    <Text style={{fontWeight: '600'}}>Rs. 10000 and Below</Text>
                  </View>
                </View>
              )}
              {check1 == 0 ? (
                <View>
                  <View style={{width: 130}}>
                    <TouchableOpacity onPress={() => setCheck1(!check1)}>
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
                        bottom: -5,
                        left: 40,
                      }}>
                      <Text style={{fontWeight: '600'}}>
                        Rs. 30000 and Above
                      </Text>
                    </View>
                  </View>
                </View>
              ) : (
                <View style={{borderRadius: 50, marginTop: 20, width: 130}}>
                  <TouchableOpacity onPress={() => setCheck1(!check1)}>
                    <Image
                      source={{
                        uri: 'https://media.istockphoto.com/id/1177664322/vector/blue-flat-checkmark-icon.jpg?s=612x612&w=0&k=20&c=Y9YC-xqGF7iCa-TyGjgS1FmPPhY9U34cKzwmO2asNP4=',
                      }}
                      style={{width: 20, height: 20, borderWidth: 0.6}}
                    />
                  </TouchableOpacity>
                  <View style={{position: 'absolute', bottom: -5, left: 40}}>
                    <Text style={{fontWeight: '600'}}>Rs. 30000 and Above</Text>
                  </View>
                </View>
              )}
            </View>

            {check4 == 0 ? (
              <View style={{marginLeft: 40, marginTop: 40}}>
                <View style={{width: 130}}>
                  <TouchableOpacity onPress={() => setCheck4(!check4)}>
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
                      bottom: -5,
                      left: 40,
                    }}>
                    <Text style={{fontWeight: '600', color: 'black'}}>
                      Rs. 20000 -Rs.30000
                    </Text>
                  </View>
                </View>
              </View>
            ) : (
              <View
                style={{
                  marginTop: 20,
                  width: 130,
                  marginLeft: 40,
                  marginTop: 40,
                }}>
                <TouchableOpacity onPress={() => setCheck4(!check4)}>
                  <Image
                    source={{
                      uri: 'https://media.istockphoto.com/id/1177664322/vector/blue-flat-checkmark-icon.jpg?s=612x612&w=0&k=20&c=Y9YC-xqGF7iCa-TyGjgS1FmPPhY9U34cKzwmO2asNP4=',
                    }}
                    style={{
                      width: 20,
                      height: 20,
                      borderWidth: 0.6,
                      marginTop: 20,
                    }}
                  />
                </TouchableOpacity>
                <View style={{position: 'absolute', top: 10, left: 40}}>
                  <Text style={{fontWeight: '600', color: 'black'}}>
                    Rs. 20000 -Rs.30000
                  </Text>
                </View>
              </View>
            )}
            {check == 0 ? (
              <View style={{marginTop: 80, marginLeft: -130}}>
                <View style={{width: 130}}>
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
                      bottom: -5,
                      left: 40,
                    }}>
                    <Text style={{fontWeight: '600'}}>Rs. 20000 -Rs.30000</Text>
                  </View>
                </View>
              </View>
            ) : (
              <View
                style={{
                  marginTop: 20,
                  width: 130,
                  marginTop: 80,
                  marginLeft: -130,
                }}>
                <TouchableOpacity onPress={() => setCheck(!check)}>
                  <Image
                    source={{
                      uri: 'https://media.istockphoto.com/id/1177664322/vector/blue-flat-checkmark-icon.jpg?s=612x612&w=0&k=20&c=Y9YC-xqGF7iCa-TyGjgS1FmPPhY9U34cKzwmO2asNP4=',
                    }}
                    style={{
                      width: 20,
                      height: 20,
                      borderWidth: 0.6,
                      marginTop: 20,
                    }}
                  />
                </TouchableOpacity>
                <View style={{position: 'absolute', top: 10, left: 40}}>
                  <Text style={{fontWeight: '600'}}>Rs. 20000 -Rs.30000</Text>
                </View>
              </View>
            )}
          </View>
          <View style={{marginLeft: 12}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => refPS.current.close()}
                style={{
                  width: 150,
                  height: 40,
                  borderRadius: 2,
                  backgroundColor: '#c2c2c2',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 8,
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#fff',
                  }}>
                  Clear
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => refPS.current.close()}
                style={{
                  width: 150,
                  height: 40,
                  borderRadius: 2,
                  backgroundColor: '#073ff7',
                  marginLeft: 20,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 8,
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#fff',
                  }}>
                  Apply
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>
        <RBSheet
          height={680}
          openDuration={250}
          ref={refPSS}
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
          <View style={{marginTop: 24, marginLeft: 12}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => refPSS.current.close()}>
                <Icon
                  name="x"
                  type="font-awesome"
                  color="black"
                  size={24}
                  style={Styles.ImageSource}
                />
              </TouchableOpacity>
              <Text style={{fontSize: 17, marginLeft: 20, color: 'black'}}>
                Filter
              </Text>
            </View>

            <View>
              <TouchableOpacity
                style={{position: 'absolute', top: 32, left: 14}}>
                <Icon
                  name="search"
                  type="font-awesome"
                  color="black"
                  size={22}
                  style={Styles.ImageSource}
                />
              </TouchableOpacity>
              <TextInput
                placeholder="Search Here"
                style={{
                  borderWidth: 0.2,
                  width: '96%',
                  borderRadius: 4,
                  marginTop: 20,
                  paddingLeft: 40,
                }}
              />
            </View>
          </View>

          {check4 == 0 ? (
            <View style={{marginLeft: 12}}>
              <View>
                <TouchableOpacity onPress={() => setCheck4(!check4)}>
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
                  <Text style={{fontWeight: '400'}}>Plus (FAsssured)</Text>
                </View>
              </View>
            </View>
          ) : (
            <View style={{borderRadius: 50, marginLeft: 12, marginTop: 20}}>
              <TouchableOpacity onPress={() => setCheck4(!check4)}>
                <Image
                  source={{
                    uri: 'https://media.istockphoto.com/id/1177664322/vector/blue-flat-checkmark-icon.jpg?s=612x612&w=0&k=20&c=Y9YC-xqGF7iCa-TyGjgS1FmPPhY9U34cKzwmO2asNP4=',
                  }}
                  style={{width: 20, height: 20, borderWidth: 0.6}}
                />
              </TouchableOpacity>
              <View style={{position: 'absolute', bottom: 2, left: 40}}>
                <Text style={{fontWeight: '400'}}>Plus (FAsssured)</Text>
              </View>
            </View>
          )}
          <View style={{marginLeft: 12, marginTop: 20}}>
            <TouchableOpacity>
              <Text style={{color: 'blue', fontWeight: '600'}}>View More</Text>
            </TouchableOpacity>
          </View>

          <View style={{position: 'absolute', top: 600, marginLeft: 10}}>
            <View style={{marginLeft: 12}}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => refPSS.current.close()}
                  style={{
                    width: 150,
                    height: 40,
                    borderRadius: 2,
                    backgroundColor: '#c2c2c2',
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 8,
                      fontSize: 16,
                      fontWeight: '600',
                      color: '#fff',
                    }}>
                    Clear
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => refPSS.current.close()}
                  style={{
                    width: 150,
                    height: 40,
                    borderRadius: 2,
                    backgroundColor: '#073ff7',
                    marginLeft: 20,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      marginTop: 8,
                      fontSize: 16,
                      fontWeight: '600',
                      color: '#fff',
                    }}>
                    Apply
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </RBSheet>
        {/* <RBSheet
          
          ref={refRAM}
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

            <Text>hello</Text>
          </RBSheet> */}

        <RBSheet
          ref={refRAM}
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
              <TouchableOpacity onPress={() => refRAM.current.close()}>
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
                 Filter
              </Text>
            </View>
            <View style={{marginTop: 50}}>
              <Text style={{fontSize: 15, color: '#151517', fontWeight: '500'}}>
                Higher the RAM,Better the Performance
              </Text>
             
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
                      8 GB and above
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
                  8 GB and above
                  </Text>
                </View>
              </View>
            )}
            <View style={{flexDirection: 'row', marginTop: 18}}>
              <TouchableOpacity
                onPress={() => refRAM.current.close()}
                style={{
                  
                  width: '44%',
                  height: 45,
                  borderRadius: 2,
                  backgroundColor:"#d7d7d9"
                }}>
                <Text style={{textAlign: 'center', marginTop: 10,color:"#fff",fontWeight:"700"}}>Clear</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => refRAM.current.close()}
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
                  Apply
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default TopSelection;
