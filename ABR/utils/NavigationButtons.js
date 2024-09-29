import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function NavigationButtons({navigation , page}) {
  return (
    <View style={styles.buttonsView}>
        <TouchableOpacity 
            style={styles.navigationButton} 
            onPress={()=>navigation.navigate(page === "Battery" ? "SpeedTime" : page === "SpeedTime" ? "Music" : page === "Music" ? "Battery" : null)}>
          <Text style={styles.textOnNavigationButton}>{page === "Battery" ? "מהירות" : page === "SpeedTime" ? "מוזיקה" : page === "Music" ? "סוללה" : "Error"}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={styles.navigationButton} 
            onPress={()=>navigation.navigate(page === "Battery" ? "Music" : page === "SpeedTime" ? "Battery" : page === "Music" ? "SpeedTime" : null)}>
          <Text style={styles.textOnNavigationButton}>{page === "Battery" ? "מוזיקה" : page === "SpeedTime" ? "סוללה" : page === "Music" ? "מהירות" : "Error"}</Text>
        </TouchableOpacity>
    </View>
  )
}
// Battery => Music + SpeedTime
// SpeedTime => Music + Battery
// Music => Battery + SpeedTime
const styles = StyleSheet.create({
    buttonsView:{
      backgroundColor:'#A64D79',
  
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center',
      paddingVertical:10,
      borderRadius:50,
    },
    navigationButton: {
      backgroundColor: '#3B1C32',
  
      width: 50,
      height: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textOnNavigationButton: {
      fontSize: 16,
      color:'white'
    }
  });
  