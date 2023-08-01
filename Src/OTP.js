import React from "react";
import { Text, View } from "react-native";


const OTP = ()=> {

  return(
    <View style={{flex:1, backgroundColor:"skyblue", justifyContent:"center",alignItems:"center"}}>
      <Text>OTP</Text>

      <View>
               

               
               { hide ==  0 ? <View> 
              <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/159/159078.png',
              }}
              style={Styles.Imageright}
            />
            </View> : 
            <Image
               source={{
                 uri: 'https://icons.veryicon.com/png/o/photographic/ant-design-official-icon-library/eye-close-1.png',
               }}
              style={Styles.Imageright}
             />
            }
             
          </View>
    </View>
  )
}

export default OTP;