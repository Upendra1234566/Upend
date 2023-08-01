import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {MotiView, useAnimationState, useDynamicAnimation} from 'moti';
import {color} from 'react-native-elements/dist/helpers';
import {FlatList} from 'react-native-gesture-handler';

const Moti = () => {
  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);

  const animation = useDynamicAnimation(() => {
    return {
      width: 200,
      height: 60,
      borderRadius: 50,
    };
  });
  const animationState = useAnimationState({
    from: {
      opacity: 0.1,
      scale: 0.4,
    },
    active: {
      opacity: 1,
      scale: 1.1,
    },
    noactive: {
      scale: 3,
    },
    opacity: 1,
  });

  const onPress = () => {
    if (clicked1 == true) {
      setClicked1(false);
      animationState.transitionTo('active');
    } else {
      setClicked1(true);
      animationState.transitionTo('noactive');
    }
  };

  //   return <MotiView state={animationState} />
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <MotiView
        style={{
          backgroundColor: '#fff',
          borderRadius: 10,
          width: 100,
          height: 100,
        }}
        from={{
          scale: 0.4,
          opacity: 0.8,
          rotate:'0deg',
          transform: [{translateY:0}]
        }}
        animate={{scale: 1, opacity: 1,transform:[{translateY:100}],rotate:"360deg"}}
        transition={{

            loop:true,
          type: 'timing',
          duration: 1500,
          transform:[{translateY:100}]
        }}></MotiView>
      {/* <TouchableOpacity onPress={() => onPress()}>
        <MotiView
          state={animationState}
          style={{
            width: 100,
            height: 100,
            backgroundColor: '#fff',
            borderRadius: 10,
          }}></MotiView>
      </TouchableOpacity> */}

      {/* <TouchableOpacity
        onPress={() => {
          if (clicked == true) {
            setClicked(false);
            animation.animateTo({width: 200, height: 60, borderRadius: 30});
          } else {
            setClicked(true);
            animation.animateTo({width: 60, height: 60, borderRadius: 30});
          }
        }}

        //   onPress={() => onPress()}
      >
        <MotiView
          state={animation}
          transition={{type: 'spring'}}
          style={{
            width: 100,
            height: 100,
            backgroundColor: '#f21d05',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {clicked ? (
            <ActivityIndicator size={'large'} color="#fff" />
          ) : (
            <Text style={{fontSize: 18, fontWeight: '600', color: '#fff'}}>
              Login
            </Text>
          )}
        </MotiView>
      </TouchableOpacity> */}
      <FlatList
       data={[1,1,1,1,1]}
       renderItem={({item})=>{
        return (
            <MotiView 
              from={{scale:0.2,opacity:1}}

              animate={{scale:1}}
            style={{width:200,height:60,backgroundColor:"#fff",margin:4}}> 
            

            </MotiView>
        )
       }}
      />
    </View>
  );
};

export default Moti;
