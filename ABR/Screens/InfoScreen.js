import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import ButtonZero from '../utils/ButtonZero'
import BluetoothStatus from '../utils/BluetoothStatus'
import ScreenLayout from '../Screens/ScreenLayout'

export default function InfoScreen({navigation}) {
  return (
    <ScreenLayout hideFooter>
      <View style={style.centerContainer}>
        <ScrollView style={style.ScrollViewStyle}>
            <TouchableOpacity style={style.optionsButtonsStyle} onPress={()=>navigation.navigate("HelpAndSupport")}>
                <Text style={style.textOnConnectButton}>Help & Support</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.optionsButtonsStyle} onPress={()=> navigation.navigate("Setting")}>
                <Text style={style.textOnConnectButton}>Settings</Text>
              </TouchableOpacity>
        </ScrollView>
      </View>
    </ScreenLayout>
  )
}

const style = StyleSheet.create({
    centerContainer:{
      backgroundColor:'white',
      alignItems:'center',
      flex:1,
      width:'100%',
    },
    ScrollViewStyle:{
        // backgroundColor:'orange',
        width:'100%',
        height:'100%',
    },
    image: {
        width:250,
        height:250,
    },
    optionsButtonsStyle:{
    //   backgroundColor:'green',
      width:'100%',
      height:40,
      display:'flex',
      alignItems:'flex-start',
      justifyContent:'center',
      paddingLeft:20,
      marginBottom:10,
    },
    textOnConnectButton:{
      fontSize:24,
    }
});