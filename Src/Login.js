import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#fff']}
        style={[Styles.linearGradient, {flex: 1}]}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: "10%",
          }}>
          <Image
            source={require('./Image/Dting.png')}
            style={{width: 160, height: 160}}
          />
        </View>
        <View style={Styles.txtView}>
          <Text style={[Styles.Viewtxt, {fontSize: 30, marginTop: '14%'}]}>
            Dating App UI
          </Text>
          <Text style={[Styles.Viewtxt, {marginTop: '2%', fontSize: 18}]}>
            Welcome Back
          </Text>
          <Text style={[Styles.Viewtxt, {fontSize: 14}]}>
            Match With People Near by
          </Text>
          <LinearGradient
            colors={['#fff', '#3b5998', '#4c669f']}
            style={[Styles.txtt]}>
            <TouchableOpacity onPress={() => navigation.navigate('Login1')}>
              <Text style={Styles.Phonenumber}>Login </Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={['#fff', '#3b5998', '#4c669f']}
            style={[Styles.txtt]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Arraydata')}>
              <Text style={Styles.Phonenumber}>Sign up </Text>
            </TouchableOpacity>
          </LinearGradient>
          <Text
            style={{
              fontSize: 20,
              color: '#f7f4ef',
              fontWeight: '700',
              marginTop: '4%',
            }}>
            OR
          </Text>
          <Text style={{fontSize: 20, color: '#f7f4ef', fontWeight: '700'}}>
            Sign in with social apps
          </Text>
        </View>
        <View style={Styles.Linkdin}>
          <TouchableOpacity
            style={{
              width: 54,
              height: 54,

              borderRadius: 60,
              marginLeft: '14%',
            }}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png?20190503112358',
              }}
              style={{width: 44, height: 44}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 54,
              height: 54,

              borderRadius: 30,
            }}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png',
              }}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 54,
              height: 54,

              borderRadius: 30,
            }}>
            <Image
              source={{
                uri: 'https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png',
              }}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: 'red'}}></View>
      </LinearGradient>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width - 30;
const windowHeight = Dimensions.get('window').height;

const Styles = StyleSheet.create({
  txtView: {
    alignItems: 'center',
  },
  Viewtxt: {
    color: '#f7f4ef',
    fontWeight: '400',
  },

  txtt: {
    width: windowWidth - 40,
    height: '12%',
    borderRadius: 30,
    backgroundColor: '#e90199',
    marginTop: '6%',
  },
  Phonenumber: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 19,
    fontWeight: '600',
    marginTop: '3%',
  },
  Linkdin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: "8%",
    left: 70,
  },
});

export default Login;
