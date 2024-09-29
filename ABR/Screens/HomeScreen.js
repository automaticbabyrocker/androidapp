import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
export default function HomeScreen({navigation}) {
  useEffect(()=>{
    const timer = setTimeout(() => {
      navigation.navigate("Bluetooth")
    }, 3000);
  },[])
  return (
    <View style={style.container}>
      <Image 
        source={require('../Images/logo.jpg')}
        style={style.image}
        />
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center'
  },
  image:{
    width:250,
    height:250,
    borderRadius:125,
  }
})