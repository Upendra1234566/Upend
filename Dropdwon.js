import React, { useState } from 'react';
import { View,  } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const MyDropdown = () => {
    const [selectedValue, setSelectedValue] = useState('');
  
    return (
      <View>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
        </Picker>
      </View>
    );
  };

  export  default MyDropdown;