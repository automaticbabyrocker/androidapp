import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function BluetoothStatus({status}) {
  return (
    <View style={style.container}>
      <Text style={style.textStyle}>Connect</Text><View style={status ? style.GreenDot : style.RedDot}></View>
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    backgroundColor:'white',
    height:500,
    width:500,
    flexDirection:'row',
    paddingTop:55,
    paddingLeft:15,
  },
  RedDot:{
    width:10,
    height:10,
    borderRadius:5,
    backgroundColor:'red',
    marginLeft:5,
    marginTop:4,
  },
  GreenDot:{
    width:10,
    height:10,
    borderRadius:5,
    backgroundColor:'green',
    marginLeft:5,
    marginTop:4,
  },
  textStyle:{
    // marginTop:40,
    // marginLeft:15,
    
  }
});