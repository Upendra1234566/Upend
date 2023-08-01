import React, { useRef, useState,useEffect } from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView ,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';


const Phonenumber = props => {

  const [isVisible, setIsVisible] = useState(false);
  const [count,setCount]=useState(10);
  

  const f1 = useRef();
  const f2 = useRef();
  const f3 = useRef();
  const f4 = useRef();
  const f5 = useRef();
  const f6 = useRef();

 

  // var regex = /^\d{10}$/;



  const toggleTextVisibility = () => {
    setIsVisible(!isVisible);
  };
  
  
  return (

    <ScrollView>   
    <View style={Styles.conatiner}>
      <View style={{marginTop: '20%'}}>
        <Icon
          name="phone-call"
          type="font-awesome"
          color="#e90199"
          size={90}
          style={{textAlign: 'center', marginTop: '4%'}}
        />
      </View>
      <View style={{marginTop: '10%'}}>
        <Text style={Styles.txtView}>Sign Up With Phone Number</Text>
      </View>
      <View style={{marginTop: '2%'}}>
        <Text style={Styles.ttxt}>
          Please inter your Phone Number and {'\n'}we will send you a SMS
          verification
        </Text>

        <Text style={{textAlign: 'center'}}>Code.</Text>
      </View>
      <View style={Styles.viewtxt}>
        <TextInput
         placeholder="Enter Number here"
         keyboardType="number-pad" 
         onPress={toggleTextVisibility}
         style={{paddingLeft: 60}}
        
        />
        <View>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/640px-Flag_of_India.svg.png',
            }}
            style={Styles.ImageSource}
          />
          
        </View>
        
      </View>

      {isVisible && <View style={{flexDirection:"row",marginTop:"10%"}}> 
        <TextInput
          style={Styles.Txttt}
          ref={f1}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(txt)=> {
            if(txt.length >=1){
              f2.current.focus();
            }
          }}

         
        />
        <TextInput
          style={Styles.Txttt}
          keyboardType="number-pad"
          maxLength={1}
          ref={f2}
          onChangeText={(txt)=> {
            if(txt.length >=1){
              f3.current.focus();
            }else if (txt.length <1){
              f1.current.focus();
            }
          }}

          
        />
        <TextInput
          style={Styles.Txttt}
          keyboardType="number-pad"
          maxLength={1}
          ref={f3}
          onChangeText={(txt)=> {
            if(txt.length >=1){
              f4.current.focus();
            } else if (txt.length <1){
              f2.current.focus();
            }
          }}

         
        />
        <TextInput
          style={Styles.Txttt}
          keyboardType="number-pad"
          maxLength={1}

          ref={f4}
          onChangeText={(txt)=> {
            if(txt.length >=1){
              f5.current.focus();
            } else if (txt.length <1){
              f3.current.focus();
            }
          }}

         
        />
        <TextInput
          style={Styles.Txttt}
          keyboardType="number-pad"
          maxLength={1}
          ref={f5}
          onChangeText={(txt)=> {
            if(txt.length >=1){
              f6.current.focus();
            } else if (txt.length <1){
              f4.current.focus();
            }
          }}

         
        />
        <TextInput
          style={Styles.Txttt}
          keyboardType="number-pad"
          maxLength={1}
          ref={f6}
          onChangeText={(txt)=> {
            if(txt.length >=1){
              f6.current.focus();
            } else if (txt.length <1){
              f5.current.focus();
            }
          }}
         
        />
         </View>  
         
         }
      <View style={{marginTop: '10%'}}>
      
        <TouchableOpacity style={Styles.TochView}
         onPress={toggleTextVisibility}
        >
          <Text style={Styles.TxtTouch}>Continue</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.MemberView}>
        <Text style={Styles.Member}>If you don't have a account?</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Login1')}
          style={{marginLeft: '4%'}}>
          <Text style={{fontSize: 17, fontWeight: '500', color: '#114bed'}}>
            Login in
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
    // backgroundColor: '#00CED1',
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
    height: 56,
    borderRadius: 50,
    borderWidth: 0.1,
    marginTop: '5%',
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
    marginTop: '16%',
  },
  ImageSource: {
    width: '10%',
    height: 18,
    borderRadius: 2,
    position: 'absolute',
    bottom: 14,
    left: 18,
  },
  Txttt: {
    width: 45,
    height: 45,
    borderWidth: 0.2,
    borderRadius: 6,
    margin: 4,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
  },
});
export default Phonenumber;
