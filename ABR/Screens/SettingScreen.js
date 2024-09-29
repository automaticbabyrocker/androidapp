import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ScreenLayout from './ScreenLayout'

export default function SettingScreen({navigation}) {
  return (
    <ScreenLayout hideFooter={true}>
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
  </ScreenLayout>
  )
}
const styles = StyleSheet.create({
  container:{
      backgroundColor:'white',
      flex:1,
      alignItems:'center',
      justifyContent:'center',
  }
})