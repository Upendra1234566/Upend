import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import React from 'react';
import COLORS from './CustomColor';
import {
  ImageBackground,
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const widthDimensions = Dimensions.get('screen').width;
const heightDimensions = Dimensions.get('screen').height;

const Login1 = props => {
  return (
    <View style={Styles.container}>
      <LinearGradient
        colors={['#fff', '#3b5998', '#4c669f']}
        style={[Styles.linearGradient, {flex: 1}]}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '14%',
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2448/2448648.png',
            }}
            style={Styles.iamge}
          />
        </View>
        <View
          style={{
            backgroundColor: '#f1edf2',
            borderRadius: 16,
            width: widthDimensions - 30,
            alignItems: 'center',
            marginLeft: 16,
            height: '60%',
          }}>
          <View style={{alignItems: 'center', marginTop: 5}}>
            <Text style={[Styles.iamgetxt, {color: COLORS.grey}]}>Login</Text>
          </View>
          <View style={{paddingLeft: '4%', marginTop: '6%'}}>
            <TextInput
              placeholder="Phone Number"
              style={Styles.input}
              keyboardType={'numeric'}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 90,
                left: 30,
              }}>
              <Icon name="phone" type="font-awesome" color="gray" size={22} />
            </View>
            <View style={{marginTop: '8%'}}>
              <TextInput
                placeholder="Enter Your Password"
                style={Styles.input}
                secureTextEntry={true}
              />

              <View
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 16,
                }}>
                <Icon name="lock" type="font-awesome" color="gray" size={22} />
              </View>
            </View>
          </View>
          <View style={Styles.Touch}>
            <TouchableOpacity onPress={() => props.navigation.navigate('OTP')}>
              <Text style={[Styles.Touchtxt, {marginRight: 8}]}>
                Login with OTP
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginLeft: '4%'}}
              onPress={() => props.navigation.navigate('Password')}>
              <Text style={Styles.password}>Forget Password</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.Touchl}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}
              style={Styles.TouchLogin}>
              <Text style={Styles.Touchtxtt}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={Styles.MemberView}>
            <Text style={Styles.Member}>If you don't have a account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Sign')}
              style={{marginLeft: '4%'}}>
              <Text style={{fontSize: 17, fontWeight: '500', color: '#040bd9'}}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CED1',
  },
  iamge: {
    width: 150,
    height: 150,
  },
  iamgetxt: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
    marginRight: 20,
  },
  input: {
    borderWidth: 1,
    width: widthDimensions - 50,
    borderRadius: 30,
    paddingLeft: 42,
    marginRight: 20,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
  },
  Touch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 16,
  },
  Touchtxt: {
    fontSize: 15,
    fontWeight: '500',

    textDecorationLine: 'underline',
  },
  password: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: '24%',
    color: 'green',
    textDecorationLine: 'underline',
  },
  Touchl: {
    alignItems: 'center',
    marginTop: '12%',
  },
  TouchLogin: {
    backgroundColor: '#e90199',
    width: widthDimensions - 50,
    height: 50,
    borderRadius: 30,
  },
  Touchtxtt: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '500',
    color: '#fff',
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
});

export default Login1;
