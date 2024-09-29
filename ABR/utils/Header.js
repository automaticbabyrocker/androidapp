import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import BluetoothStatus from './BluetoothStatus';

export default function Header({connectStatus , infoHeader}) {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
        <View style={style.statusContainer}>
            <BluetoothStatus status={connectStatus} />
        </View>

        <View style={style.logoContainer}>
            <Image style={style.logo} source={require('../Images/logo.jpg')}/>
        </View>

        <View style={style.menuView}>
            <TouchableOpacity onPress={()=> infoHeader ?  navigation.goBack() :  navigation.navigate("Info")}>
              <Image 
                source={infoHeader ? require('../Images/arrow.png') : require('../Images/menu.png')}
                style={style.menuImage}
              />
            </TouchableOpacity>
        </View>
  </View>
  )
}

const style = StyleSheet.create({
    container:{
      backgroundColor:'red',
      width:'100%',

      flexDirection:'row',
      flex:3
    },
    
    statusContainer:{
        // backgroundColor:'#FF9C73',
        height:'100%',
        // width:'33%',
        flex:1
    },

    logoContainer:{
        // backgroundColor:'#D76C82',
        height:'100%',
        flex:1,
        alignItems:'center',
        marginTop:95,
    },
    logo:{
        width:60,
        height:60,
        borderRadius:30,
    },
    menuView:{
        // backgroundColor:'#CC2B52',
        height:'100%',
        // width:'33%',
        flex:1,
        justifyContent:'flex-start',
        alignItems:'flex-end',
    },
    menuImage:{
      width:40,
      height:40,
      marginTop:55,
      marginRight:15,
    },
})