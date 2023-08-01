import React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Splash from "./Splash";
import Login from "./Login";



const Drawer = createDrawerNavigator();


const InitialStack = ()=>{

    return(
        <Drawer.Navigator>
            
            <Drawer.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
            <Drawer.Screen name="Login" component={Login} options={{headerShown:false}}/>
            

            

        </Drawer.Navigator>
    )
}

export default InitialStack;