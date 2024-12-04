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
        <Text style={style.title}>ABR</Text>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  image:{
    width:250,
    height:250,
    objectFit:'contain'
  },
  title:{
    fontSize:32,
    fontWeight:'bold',
  }
})