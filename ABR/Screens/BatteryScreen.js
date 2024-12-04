import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ScreenLayout from './ScreenLayout'
import Battery from '../utils/Battery'
import NavigationButtons from '../utils/NavigationButtons'

export default function BatteryScreen({navigation}) {
  return (
    <ScreenLayout navigation={navigation} page={"Battery"}>
        <View style={styles.container}>
            <Battery percentage={45}/>
        </View>
    </ScreenLayout>
  )
}

const styles = StyleSheet.create({
    container:{
        // backgroundColor:'blue',
        flex:1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        // flex: 9,
        paddingHorizontal: 20,
    },
})