import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import Chatheader from './Chatheader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GiftedChat} from 'react-native-gifted-chat';
import { useRoute } from '@react-navigation/native';


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const route = useRoute();

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello Upendra ',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sv-0JKtdQ2PiBjk2et3TrqbLiLt2378vNw&usqp=CAU',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#e3e2dc'}}>
      <Chatheader />

      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id:1,
        }}
      />
    </View>
  );
};

export default Chat;
