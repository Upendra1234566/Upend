import React from 'react';
import {Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Contact from './Contact';
import Upendra from './Upendra';
import Apicheck from './Apicheck';
import Productapi from './Productapi';
import MyDropdown from '../Dropdwon';
import Wishit from './Wishit';
import Bag from '../Bag';
import OrderSummary from './OrderSummary';
import TopSelection from './TopSelection';
import Moti from './Moti';
import DateTime from './DateTime';
import Chat from '../Chat';
import Calculater from './Calculater';

const Drawer = createDrawerNavigator();

const UI = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Upendra"
        component={Upendra}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Apicheck"
        component={Apicheck}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Productapi" component={Productapi} options={{headerShown: false }} />
      <Drawer.Screen name="Dropdown" component={MyDropdown} options={{headerShown: false }} />
      <Drawer.Screen name="Wishit" component={Wishit} options={{headerShown: false }} />
      <Drawer.Screen name="Bag" component={Bag} options={{headerShown: false }} />
      <Drawer.Screen name="OrderSummary" component={OrderSummary} options={{headerShown: false }} />
      <Drawer.Screen name="TopSelection" component={TopSelection} options={{headerShown: false }} />
      <Drawer.Screen name="Moti" component={Moti} options={{headerShown: false }} />
      <Drawer.Screen name="DateTime" component={DateTime} options={{headerShown: false }} />
      <Drawer.Screen name="Chat" component={Chat} options={{headerShown: false }} />
      <Drawer.Screen name="Calculater" component={Calculater} options={{headerShown: false }} />
    </Drawer.Navigator>
  );
};

export default UI;
