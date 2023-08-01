import React, {useState, useRef} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Arraydata from './Arraydata';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login1 = props => {
  const [change, setChange] = useState(0);
  const [gmail, setGmail] = useState('');
  // const [password, setPassword] = useState('');
  const [ups, setUps] = useState('');
  const [gmailerror, setEmailError] = useState(false);
  const [passworderror, setPasswordError] = useState(false);
  const [Show, setShow] = useState(1);
  const [hide, setHide] = useState(1);
  const [eyes, setEyes] = useState(false);
  const [pps, setpps] = useState('');
  const [numbererror, setNumbererror] = useState(false);
  const [otp, setOtp] = useState(' ');
  const [matching, setMatching] = useState(otp);
  const [topotp, setTopotp] = useState(' ');
  const [val, setVal] = useState('');
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [val3, setVal3] = useState('');
  const [val4, setVal4] = useState('');
  const [val5, setVal5] = useState('');
  const [iseditable, setiseditbale] = useState(false);

  let names = [];
  // let names1 = [];

  const SaveData = async () => {
    names.push({gmail:gmail,password:ups})
    // names.push({names:gmail,names1:ups})
  
    
       var templateContact = [];
      var x = JSON.parse(await AsyncStorage.getItem('EMAIL'))
       templateContact =x;
       templateContact.map((item)=>{
        names.push(item)
       })
      await AsyncStorage.setItem('EMAIL',JSON.stringify(names));
      // await AsyncStorage.setItem('PASSWORD',JSON.stringify(names1));
      console.log("saved")
     props.navigation.navigate('Contact')
   
  };

  const updatedtable = () => {
    setiseditbale(!iseditable);
  };

  // const updatedtable1 = ()=>{
  //   setiseditbale(!iseditable)
  // }

  var a = val;
  var b = val1;
  var c = val2;
  var d = val3;
  var e = val4;
  var f = val5;
  var h = a + b + c + d + e + f;

  const CheckOtp = () => {
    if (h == otp) {
      props.navigation.navigate('Arraydata');
    } else {
      Alert.alert(" Don't Matching OTP");
    }
  };

  const f1 = useRef();
  const f2 = useRef();
  const f3 = useRef();
  const f4 = useRef();
  const f5 = useRef();
  const f6 = useRef();

  const Validation = () => {
    if (gmail == '') {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (!number) {
      setNumbererror(true);
    } else {
      setPasswordError(false);
    }
    if (!gmail || !password || !pps) {
      return false;
    }
  };
  const handlePassword = ups => {
    var re = {
      capital: /(?=.*[A-Z])/,
      Small: /(?=.*[a-z])/,
      length: /(?=.{8,16}$)/,
      specialChar: /[ -\/:-@\[-\`{-~]/,
      digit: /(?=.*[0-9])/,
    };

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    setUps(ups);
    if (ups == '') {
      setPasswordError('Password Empty!');
      setHide(1);
    } else if (!re.capital.test(ups)) {
      setPasswordError(' Must be at least capital  letter, ');
      setHide(1);
    } else if (!re.Small.test(ups)) {
      setPasswordError('Must be at least Small  letter');
      setHide(1);
    } else if (!re.specialChar.test(ups)) {
      setPasswordError('Must be at least SpecialChar  letter  ');
      setHide(1);
    } else if (!re.length.test(ups)) {
      setPasswordError(' please Enter 8-16 length Character');
      setHide(1);
    } else if (!re.digit.test(ups)) {
      setPasswordError(' Must be at least digit character ');
      setHide(1);
    // } else if (reg.test(gmail) === true) {
    //   setEmailError('');
      //Alert.alert('Success Login');
    } else {
      setPasswordError(' ');
      // props.navigation.navigate('Contact')
      setHide(0);
    }
  };

  const handleEmail = gmail => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    setGmail(gmail);

    if (gmail == '') {
      setEmailError('Email Empty!');
      setShow(1);
    } else if (!reg.test(gmail)) {
      setEmailError(' Enter valid email address');

      setShow(1);
    } 
    
    else {
      setEmailError(' ');
      setShow(0);
      setEyes(false);
    }
  };

  // const handleValidation = pps => {
  //   setpps(pps);
  //   var re = {
  //     capital: /(?=.*[A-Z])/,
  //     Small: /(?=.*[a-z])/,
  //     length: /(?=.{8,16}$)/,
  //     specialChar: /[ -\/:-@\[-\`{-~]/,
  //     digit: /(?=.*[0-9])/,
  //   };
  //   const regg = /^[0-9\d]{10}/;

  //   if (/^\d*$/.test(pps)) {
  //     setpps(pps);
  //   }

  // if (pps === " ") {
  //   setNumbererror(' Number Empty!');
  // }
  //  if (!regg.test(pps)) {
  //   setNumbererror(' Please put 10 digit mobile number"  ');

  // } else{
  //   setNumbererror(" ")
  // }

  //  if(re.capital.test(pps)){
  //        setNumbererror("Don't type capital letter only Digit type  ")
  // }
  //   if(re.Small.test(pps)){
  //   setNumbererror("Don't type Small letter only Digit type")
  // } if(re.specialChar.test(pps)){
  //   setNumbererror("Don't type SpcialChar letter only Digit type  ")
  // }
  // };

  // const handleInputChange = c => {
  //   // Validate the input using a regular expression
  //   // var x = Math.floor(Math.random() * (2000000 - 999999)) + 99999;

  //   let re = /^\d*$/;

  //   if (re.test(c)) {
  //     setpps(c);
  //   } else if (re.test(c) == ' ') {
  //     setOtp(' ');
  //     // Alert.alert(' Only Digit Number Type ');
  //   }
  // }; // const handleInputChange = c => {
  //   // Validate the input using a regular expression
  //   // var x = Math.floor(Math.random() * (2000000 - 999999)) + 99999;

  //   let re = /^\d*$/;

  //   if (re.test(c)) {
  //     setpps(c);
  //   } else if (re.test(c) == ' ') {
  //     setOtp(' ');
  //     // Alert.alert(' Only Digit Number Type ');
  //   }
  // };

  function LoginWIth(c) {
    //var  re = /^\d*$/;

    var x = Math.floor(Math.random() * (2000000 - 999999)) + 99999;
    if (pps.length !== 10) {
      Alert.alert(' Please Enter The 10 Digit Number');
      return;
    }

    if (otp !== '') {
      setOtp(x);
      Alert.alert('  Sucessfully');
      return;
    }
  }

  const CheckOtppassword = () => {
    var x = Math.floor(Math.random() * (2000000 - 999999)) + 99999;

    if (x !== otp) {
      setOtp(otp);
      Alert.alert(' Currect Otp');
    } else {
      setOtp(otp);
      Alert.alert(' In Currect OTP');
    }
  };

  return (
    <ScrollView>
      <View style={Styles.conatiner}>
        <Text style={{fontSize: 20, color: 'black'}}>{otp}</Text>
        <View style={{marginTop: '18%'}}>
          <Image
            source={require('./Image/Dting.png')}
            style={Styles.sourceIamge}
          />
        </View>
        <View style={{textAlign: 'center', marginTop: '12%'}}>
          <Text style={Styles.txtView}>Login With Number</Text>
        </View>

        {/* <Text>{iseditable}</Text>
        {iseditable ? <TextInput placeholder='hhhh' editable={!iseditable}/>:<TextInput placeholder='gggggg'/>} */}
        <View style={Styles.viewtxt}>
          <TextInput
            placeholder="Enter Email"
            style={{paddingLeft: 44}}
            autoCapitalize="none"
            autoCorrect={false}
            value={gmail}
            onChangeText={c => handleEmail(c)}
            
          />
          {/* <TextInput
            placeholder="Enter Number Here"
            // placeholder={pps ? 'Please Insert value' : 'Input Disabled'}

            style={{paddingLeft: 44}}
            //editable={iseditable}
            //disabled={true}
            // autoCapitalize="none"
            // autoCorrect={false}
            editable={!iseditable}
            value={pps}
            maxLength={10}
            onChangeText={handleInputChange}
          /> */}
          <View>
            <Image
              source={{
                uri: 'https://w7.pngwing.com/pngs/1010/602/png-transparent-gmail-email-gmail-angle-rectangle-triangle-thumbnail.png',
              }}
              style={Styles.ImageSource}
            />
          </View>
          {/* <View>
            <Image
              source={{
                uri: 'https://png.pngitem.com/pimgs/s/20-202062_old-phone-old-phone-icon-png-transparent-png.png',
              }}
              style={Styles.ImageSource}
            />
          </View> */}
          <View>
            {Show == 0 ? (
              <View>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz0FwAY9vfbAkJU38xiM-_mwILZtZ8JWtcxA72SpcGpzGNp8qvXIQHGKDrZEVYEYW_k6o&usqp=CAU',
                  }}
                  style={Styles.Imageright}
                />
              </View>
            ) : null}
          </View>
        </View>
        {/* {gmailerror ? <Text style={{color: 'red'}}>{gmailerror}</Text> : null} */}
        {numbererror ? <Text style={{color: 'red'}}>{numbererror}</Text> : null}
        {change == 0 ? (
          <View style={Styles.viewtxt}>
            <TextInput
              placeholder="Password"
              style={{paddingLeft: 44}}
              value={ups}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={eyes}
              onChangeText={e => handlePassword(e)}
            />
            <View>
              <Icon
                name="lock"
                type="font-awesome"
                color="black"
                size={20}
                style={Styles.ImageSource}
              />
              <View>
                <TouchableOpacity onPress={() => setEyes(!eyes)}>
                  {eyes ? (
                    <View>
                      <Image
                        source={{
                          uri: 'https://cdn-icons-png.flaticon.com/512/159/159078.png',
                        }}
                        style={Styles.Imageright}
                      />
                    </View>
                  ) : (
                    <Image
                      source={{
                        uri: 'https://icons.veryicon.com/png/o/photographic/ant-design-official-icon-library/eye-close-1.png',
                      }}
                      style={Styles.Imageright}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View style={{flexDirection: 'row', marginTop: '4%'}}>
            <TextInput
              style={Styles.Txttt}
              ref={f1}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={txt => {
                if (txt.length >= 1) {
                  f2.current.focus();
                  setVal(txt);
                }
              }}
            />
            <TextInput
              style={Styles.Txttt}
              keyboardType="number-pad"
              maxLength={1}
              ref={f2}
              onChangeText={txt => {
                if (txt.length >= 1) {
                  f3.current.focus();
                  setVal1(txt);
                } else if (txt.length < 1) {
                  f1.current.focus();
                }
              }}
            />
            <TextInput
              style={Styles.Txttt}
              keyboardType="number-pad"
              maxLength={1}
              ref={f3}
              onChangeText={txt => {
                if (txt.length >= 1) {
                  f4.current.focus();
                  setVal2(txt);
                } else if (txt.length < 1) {
                  f2.current.focus();
                }
              }}
            />
            <TextInput
              style={Styles.Txttt}
              keyboardType="number-pad"
              maxLength={1}
              ref={f4}
              onChangeText={txt => {
                if (txt.length >= 1) {
                  f5.current.focus();
                  setVal3(txt);
                } else if (txt.length < 1) {
                  f3.current.focus();
                }
              }}
            />
            <TextInput
              style={Styles.Txttt}
              keyboardType="number-pad"
              maxLength={1}
              ref={f5}
              onChangeText={txt => {
                if (txt.length >= 1) {
                  f6.current.focus();
                  setVal4(txt);
                } else if (txt.length < 1) {
                  f4.current.focus();
                }
              }}
            />
            <TextInput
              style={Styles.Txttt}
              keyboardType="number-pad"
              maxLength={1}
              ref={f6}
              onChangeText={txt => {
                if (txt.length >= 1) {
                  f6.current.focus();
                  setVal5(txt);
                } else if (txt.length < 1) {
                  f5.current.focus();
                }
              }}
            />
          </View>
        )}
        {!passworderror == 0 ? (
          <Text style={{color: 'red'}}>{passworderror}</Text>
        ) : null}
        <View style={Styles.Touch}>
          {change == 0 ? (
            <View>
              <TouchableOpacity
                onPress={() => {
                  setChange(!change);
                  LoginWIth();
                  updatedtable();
                }}>
                <Text style={[Styles.Touchtxt, {marginRight: 20}]}>
                  Login with OTP
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                onPress={() => {
                  setChange(!change);
                  updatedtable();
                }}>
                <Text style={[Styles.Touchtxt, {marginRight: 20}]}>
                  Login Password
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {change == 0 ? (
            <View>
              <TouchableOpacity
                style={{marginLeft: '4%'}}
                onPress={() => props.navigation.navigate('Password')}>
                <Text style={Styles.password}>Forget Password</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                style={{marginLeft: '4%'}}
                onPress={() => props.navigation.navigate('Password')}>
                <Text style={Styles.password}>Reset Password</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={{marginTop: '14%'}}>
          <TouchableOpacity
            style={Styles.TochView}
            onPress={() => {
              //handleInputChange();
              handleEmail();
              handlePassword();
              SaveData();
              //CheckOtppassword();
              // CheckOtp();
            }}
            //onPress={() =>handlePassword()}
            // onPress={() => props.navigation.navigate('OTP')}
          >
            <Text style={Styles.TxtTouch}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={Styles.MemberView}>
          <Text style={Styles.Member}>If you don't have a account?</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Phonenumber')}
            style={{marginLeft: '4%'}}>
            <Text style={{fontSize: 17, fontWeight: '500', color: '#e67207'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
  },
  txtView: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  ttxt: {
    fontSize: 15,
    fontWeight: '400',
    marginLeft: '5%',
  },
  test: {
    fontSize: 18,
    fontWeight: '400',
    marginLeft: '34%',
  },
  viewtxt: {
    width: '90%',
    height: 54,
    borderRadius: 50,
    borderWidth: 0.1,
    marginTop: '5%',
    //sssbackgroundColor:"#fff"
  },
  TochView: {
    backgroundColor: '#e90199',
    width: 328,
    height: 54,
    borderRadius: 50,
  },
  TxtTouch: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 12,
    color: '#ffffff',
  },
  Member: {
    fontSize: 14,
    fontWeight: '400',
    color: '#4d494b',
  },
  MemberView: {
    alignItems: 'center',
    marginTop: 40,
    flexDirection: 'column',
  },
  ImageSource: {
    width: '6%',
    height: 22,
    borderRadius: 2,
    position: 'absolute',
    bottom: 14,
    left: 18,
  },
  Imageright: {
    width: '6%',
    height: 22,
    borderRadius: 2,
    position: 'absolute',
    bottom: 14,
    right: 18,
  },

  sourceIamge: {
    width: 160,
    height: 160,
    borderRadius: 2,
  },
  password: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: '28%',
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
  Touchtxt: {
    fontSize: 15,
    fontWeight: '500',

    textDecorationLine: 'underline',
  },
  Touch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 26,
  },
  Txttt: {
    width: 45,
    height: 45,
    borderWidth: 0.2,
    borderRadius: 4,
    margin: 4,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    //multiline: "true",
  },
});
export default Login1;
