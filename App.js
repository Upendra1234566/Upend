import React from 'react';
import {Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import InitialStack from './Src/InitialStack';
import Phonenumber from './Src/Phonenumber';
import Login1 from './Src/Login1';
import OTP from './Src/OTP';
import Sign from './Src/Sign';
import Password from './Src/Password';
import Arraydata from './Src/Arraydata';
import Showdata from './Showdata';
import Contact from './Src/Contact';
import UI from './Src/UI';
import Login from './Src/Login';
import Productapi from './Src/Productapi';
import Wishit from './Src/Wishit';
import Viewchart from './Viewplan';
import Viewplan from './Viewplan';
import Sizechart from './Sizechart';
import AddCard from './Src/AddCard';
import OrderSummary from './Src/OrderSummary';
import Summaryy from './Src/Summaryy';
import TopSelection from './Src/TopSelection';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="UI" component={UI} options={{headerShown: false}} />
        <Stack.Screen
          name="InsitialStack"
          component={InitialStack}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Phonenumber"
          component={Phonenumber}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login1"
          component={Login1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Password"
          component={Password}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Sign"
          component={Sign}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Arraydata"
          component={Arraydata}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Showdata"
          component={Showdata}
          options={{headerShown: true}}
        />
         <Stack.Screen
          name="Viewplan"
          component={Viewplan}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Sizechart"
          component={Sizechart}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="AddCard"
          component={AddCard}
          options={{headerShown: false}}
        />
       
        <Stack.Screen
          name=" Summaryy"
          component={Summaryy}
          options={{headerShown: true}}
        />
        


        
        
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// import React, { useState } from "react";
// import { Button, Text, View } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const App = () =>{

//    const [data,setData]=useState('')

//   const setdata =  async() => {
//     await AsyncStorage.setItem("user","Upendra Singh")
//   }

//   const getData = async()=>{
//     const name = await AsyncStorage.getItem("user")
//     console.log(name);
//     setData(name)
//   }

//   const removeData = async()=>{

//     await AsyncStorage.removeItem("user")

//     setData('')
//   }

//   return(
//     <View style={{flex:1, justifyContent:'center', alignItems:"center"}}>
//       <Text>AsyncStorage</Text>

//       <Text  style={{fontSize:30,color:"red"}}>{data}</Text>
//       <Button title="setData" color={"red"} onPress={setdata}/>
//       <Button title="getData" color={"green"} onPress={getData}/>
//       <Button title="removeData" onPress={removeData}/>

//     </View>
//   )
// }

// export default App;
