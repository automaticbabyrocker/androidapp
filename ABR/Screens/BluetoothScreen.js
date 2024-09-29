import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ScreenLayout from './ScreenLayout';

export default function BluetoothScreen({ navigation }) {
  return (
    <View style={style.container}>

      <View style={style.topContainer}>
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate("Info")}>
              <Image 
                source={require('../Images/menu.png')}
                style={style.menuImage}
              />
            </TouchableOpacity>
        </View>

      </View>
      <View style={style.centerContainer}>
        <View style={style.centerData}>
            <Image source={require('../Images/bluetooth.png')} style={style.image} />
            
            <TouchableOpacity style={style.connectButton} onPress={()=> navigation.navigate("SpeedTime")}>
              <Text style={style.textOnConnectButton}>CONNECT</Text>
            </TouchableOpacity>
        </View>

      </View>

    </View>
  );
}

const style = StyleSheet.create({
  container:{
    // backgroundColor:'pink',
    backgroundColor:'white',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },


  topContainer:{
    // backgroundColor:'red',
    height:'20%',
    width:'100%',
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'flex-end',

  },
  menuImage:{
    width:40,
    height:40,
    marginRight:15,
    marginTop:55,
  },


  centerContainer: {
    flex: 1,
    width:'100%',

    // backgroundColor:'yellow',

    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  centerData:{
    // backgroundColor:'orange',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    height:'60%',

  },
  image: {
    width: 250,
    height: 250,
    marginBottom:50,
  },
  connectButton: {
    backgroundColor: '#C6E7FF',
    width: 150,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textOnConnectButton: {
    fontSize: 16,
  },
});
