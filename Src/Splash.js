import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      Checklogin();
    }, 3000);
  });

  const Checklogin = async () => {
    const mail = await AsyncStorage.getItem('EMAIL');
    const Pass = await AsyncStorage.getItem('PASSWORD');

    if (mail !== null ) {
      navigation.navigate('UI');
    } else {
      navigation.navigate('Login');
    }
  };
  return (
    <View style={Styles.container}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#fff']}
        style={[Styles.linearGradient, {flex: 3}]}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('./Image/Dting.png')}
            style={Styles.sourceIamge}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Splash;
