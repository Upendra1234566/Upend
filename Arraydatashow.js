// import React, { useState } from "react";
// import { View,Text,FlatList } from "react-native";


// const Showdata = (props)=>{
//       const[data, setdata]=useState([up])

//     const {up}= props.route.params;
//     console.log(up)




//     return(
//         <View style={{flex:1}}>
//             <View>
                
//                 <FlatList
//                 data={up}
//                 renderItem={({item})=>{
//                     return(
//                         <View style={{flex:1, backgroundColor:'skyblue',alignItems:"center"}}> 
//                             <Text>{item.price}</Text>
//                             <Text>{item.title}</Text>
                            
//                         </View>
//                     )
//                 }}

                
//                 />
//             </View>
//         </View>
//     )
// }

// export default Showdata;



//secound part 


// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   Dimensions,
//   Image,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';

// import Header from '../Header';

// const Arraydata = props => {
//   const product = [
//     {
//       id: 0,
//       title: 'Skin Beauty Serum.',
//       price: 460,
//       thumbnail: 'https://i.dummyjson.com/data/products/19/thumbnail.jpg',
//       qty: 0,
//     },
//     {
//       id: 1,
//       title: 'iPhone 9',
//       price: 549,
//       thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
//       qty: 0,
//     },
//     {
//       id: 2,
//       title: 'iPhone X',
//       price: 899,
//       thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
//       qty: 0,
//     },
//     {
//       id: 3,
//       title: 'Samsung Universe 9',
//       price: 1249,
//       thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
//       qty: 0,
//     },
//     {
//       id: 4,
//       title: 'OPPOF19',
//       price: 280,
//       thumbnail: 'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
//       qty: 0,
//     },
//     {
//       id: 5,
//       title: 'Huawei P30',
//       price: 499,
//       thumbnail: 'https://i.dummyjson.com/data/products/5/thumbnail.jpg',
//       qty: 0,
//     },
//     {
//       id: 6,
//       title: 'MacBook Pro',
//       price: 1749,
//       thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
//       qty: 0,
//     },
//     {
//       id: 7,
//       title: 'Samsung Galaxy Book',
//       price: 1499,
//       thumbnail: 'https://i.dummyjson.com/data/products/7/thumbnail.jpg',
//       qty: 0,
//     },
//     {
//       id: 8,
//       title: 'Microsoft Surface Laptop 4',
//       price: 1499,
//       thumbnail: 'https://i.dummyjson.com/data/products/8/thumbnail.jpg',
//       qty: 0,
//     },
//     {
//       id: 9,
//       title: 'Infinix INBOOK',
//       price: 1099,
//       thumbnail: 'https://i.dummyjson.com/data/products/9/thumbnail.jpg',
//       qty: 0,
//     },
//     {
//       id: 10,
//       title: 'HP Pavilion 15-DK1056WM',
//       price: 1099,
//       thumbnail: 'https://i.dummyjson.com/data/products/10/thumbnail.jpeg',
//       qty: 0,
//     },
//     {
//       id: 11,
//       title: 'perfume Oil',
//       price: 13,
//       thumbnail: 'https://i.dummyjson.com/data/products/11/thumbnail.jpg',
//       qty: 0,
//     },
//     {
//       id: 12,
//       title: 'Brown Perfume',
//       price: 40,
//       thumbnail: 'https://i.dummyjson.com/data/products/12/thumbnail.jpg',
//       qty: 0,
//     },
//     {
//       id: 13,
//       title: 'Fog Scent Xpressio Perfume',
//       price: 13,
//       thumbnail: 'https://i.dummyjson.com/data/products/13/thumbnail.webp',
//       qty: 0,
//     },
//     {
//       id: 14,
//       title: 'Non-Alcoholic Concentrated Perfume Oil',
//       price: 120,
//       thumbnail: 'https://i.dummyjson.com/data/products/14/thumbnail.jpg',
//       qty: 0,
//     },
//     {
//       id: 15,
//       title: 'Eau De Perfume Spray',
//       price: 30,
//       thumbnail: 'https://i.dummyjson.com/data/products/6/thumbnail.png',
//       qty: 0,
//     },
//     {
//       id: 16,
//       title: 'Hyaluronic Acid Serum',
//       price: 19,
//       thumbnail: 'https://i.dummyjson.com/data/products/16/thumbnail.jpg',
//       qty: 0,
//     },
//     {
//       id: 17,
//       title: 'Tree Oil 30ml',
//       price: 12,
//       thumbnail: 'https://i.dummyjson.com/data/products/17/thumbnail.jpg',
//       qty: 0,
//     },
//     {
//       id: 18,
//       title: 'Oil Free Moisturizer 100ml',
//       price: 40,
//       thumbnail: 'https://i.dummyjson.com/data/products/18/thumbnail.jpg',
//       qty: 0,
//     },
//     {
//       id: 19,
//       title: 'Skin Beauty Serum.',
//       price: 46,
//       thumbnail: 'https://i.dummyjson.com/data/products/19/thumbnail.jpg',
//       qty: 0,
//     },
//     {
//       id: 20,
//       title: 'Freckle Treatment Cream- 15gm',
//       price: 700,
//       thumbnail: 'https://i.dummyjson.com/data/products/20/thumbnail.jpg',
//       qty: 0,
//     },
//   ];

//   const [cart, setCart] = useState([]);
//   // const [cart1,setCart1]=useState([])

//   const countcart = u => {
//     // cart.push(u);
//     // setCart([...cart]);

//     let data = {
//       id: 20,
//       title: 'Freckle Treatment Cream- 15gm',
//       price: 700,
//       thumbnail: 'https://i.dummyjson.com/data/products/20/thumbnail.jpg',
//       qty: 0,
//     }
//     setCart(oldArray => [...oldArray,u] );
//     console.log(u)
//   };
//       const  navigatefn = ()=>{

//         props.navigation.navigate('Showdata',{up:cart})
//         console.log(cart)
//       }
//   // const countcart1 = (e) => {
//   //   cart1.push(e);
//   //   setCart1([...cart1]);

//   //   // {product.forEach((item2)=>{
//   //   //   Alert.alert(item2.price.toString())
//   //   // })}
//   // };

//   return (
//     <View style={{flex: 1}}>
//       <Header
//         leftIcon={{
//           uri: 'https://cdn-icons-png.flaticon.com/512/2415/2415292.png',
//         }}
//         rightIcon={{
//           uri: 'https://cdn-icons-png.flaticon.com/512/3239/3239958.png',
//         }}
//       />
//       <View
//         style={{
//           backgroundColor: 'red',
//           borderRadius: 20,
//           height: 20,
//           width: 20,
//           position: 'absolute',
//           right: 20,
//           top: 10,
//           position: 'absolute',
//           right: 20,
//           top: 10,
//         }}>
//         <Text
//           style={{
//             textAlign: 'center',
//             color: '#fff',
//             fontSize: 12,
//             fontWeight: '500',
//             marginTop: 1,
//           }}
//           onPress={()=> navigatefn()}
//           >
//           {cart.length}
//         </Text>
//       </View>
      
//       {cart.map(a => {
//         return (
//           <Text style={{backgroundColor: 'red', textAlign: 'center'}}>{a.title}</Text>
//         );
//       })}

//       <FlatList
//         data={product}
//         numColumns={2}
//         renderItem={({item}) => {
//           return (
//             <View style={Styles.container}>
//               <View style={Styles.Datalist}>
//                 <View
//                   style={{
//                     position: 'absolute',
//                     bottom: 56,
//                     alignSelf: 'center',
//                   }}>
//                   <Image
//                     source={{uri: item.thumbnail}}
//                     style={{width: 60, height: 60}}
//                   />
//                 </View>

//                 <View>
//                   <View style={{alignSelf: 'center'}}>
//                     <Text
//                       style={{color: 'black', fontSize: 16, fontWeight: '800'}}>
//                       {item.title}
//                     </Text>
//                   </View>
//                   <View>
//                     <Text
//                       style={{
//                         color: '#b80d07',
//                         textAlign: 'center',
//                         fontWeight: '600',
//                       }}>
//                       {'$' + item.price}
//                     </Text>
//                   </View>
//                   <View
//                     style={{
//                       position: 'absolute',
//                       top: 60,
//                       alignSelf: 'center',
//                     }}>
//                     <TouchableOpacity
//                       //  onPress={()=> Alert.alert( item.price.toString())}
//                       onPress={() => {
//                         countcart(item);
//                         Alert.alert(item.title.toString());
//                       }}
//                       style={{
//                         borderRadius: 20,
//                         width: 70,
//                         height: 40,
//                         backgroundColor: '#72c953',
//                       }}>
//                       <Text
//                         style={{
//                           textAlign: 'center',
//                           marginTop: 8,
//                           color: '#fff',
//                         }}>
//                         Buy
//                       </Text>
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               </View>
//             </View>
//           );
//         }}
//       />
//     </View>
//   );
// };

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const Styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',

//     width: windowWidth / 2 - 20,
//     height: 200,
//     marginTop: '5%',
//     backgroundColor: '#ffffff',
//     marginHorizontal: '2%',
//     borderRadius: 10,
//     marginLeft: 11,
//     shadowColor: '#0d051a',
//     shadowOpacity: 0.4,
//     shadowRadius: 20,
//     elevation: 8,
//     shadowOffset: {
//       width: 0,
//       height: 0,
//     },
//   },
//   textdata: {
//     fontSize: 14,
//     fontWeight: '700',
//     color: 'black',
//   },
//   Datalist: {
//     alignSelf: 'center',
//   },
// });

// export default Arraydata;
