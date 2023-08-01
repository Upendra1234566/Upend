import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

const Lifecycle = (props) => {
  const [data11, setdata11] = useState();
  const data1 = [
    {
      id: 1,
      title: 'Price',
    },
    {
      id: 2,
      title: 'plus (FAssured)',
    },
    {
      id: 3,
      title: 'Deliver At',
    },
    {
      id: 4,
      title: 'Brand',
    },
    {
      id: 5,
      title: 'Customer Rating',
    },
    {
      id: 6,
      title: 'Theme',
    },
    {
      id: 7,
      title: 'Fabric',
    },
    {
      id: 8,
      title: 'Saree Type',
    },
    {
      id: 9,
      title: 'Patten',
    },
    {
      id: 10,
      title: 'Occasion',
    },
    {
      id: 11,
      title: 'Offers',
    },
    {
      id: 12,
      title: 'Discount',
    },
    {
      id: 13,
      title: 'Pack of',
    },
    {
      id: 14,
      title: 'Blouse Included',
    },
    {
      id: 15,
      title: 'Saree Style',
    },
    {
      id: 16,
      title: 'Gender',
    },
    {
      id: 17,
      title: 'Avalability',
    },
    {
      id: 18,
      title: 'Category',
    },
  ];

  const Senddata = (e) =>{
    props.SenddataChild(e)
  }
  const [life, setLfe] = useState('');
  return (
    <View>
      <View>
        <FlatList
          data={data1}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View>
                <View style={{backgroundColor: '#dfe0e6', width: '100%'}}>
                  <TouchableOpacity style={{margin: 16, width: 80}}
                  onPress={()=> Senddata(item.id)}
                  >
                    <Text style={{textAlign: 'center'}}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Lifecycle;
