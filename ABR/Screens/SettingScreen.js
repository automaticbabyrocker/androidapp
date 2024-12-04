import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import ScreenLayout from './ScreenLayout'
import { FontAwesome } from '@expo/vector-icons';

export default function SettingScreen({ navigation }) {
  return (
    <ScreenLayout hideFooter={true}>
      <View style={style.container}>
        <Text style={style.title}>
          Settings <FontAwesome 
            name="cogs"
            size={24} 
            color="black" />
        </Text>
        
        <ScrollView style={style.ScrollViewStyle}>
          <TouchableOpacity style={style.optionsButtonsStyle} onPress={() => navigation.navigate("Introductions")}>
            <Text style={style.textOnConnectButton}>Introductions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.optionsButtonsStyle} onPress={() => navigation.navigate("Bluetooth")}>
            <Text style={style.textOnConnectButton}>Bluetooth</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.optionsButtonsStyle} onPress={() => navigation.navigate("Language")}>
            <Text style={style.textOnConnectButton}>Language</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.optionsButtonsStyle} onPress={() => navigation.navigate("Version")}>
            <Text style={style.textOnConnectButton}>Version</Text>
          </TouchableOpacity>
        </ScrollView>
        
      </View>
    </ScreenLayout>
  )
}
const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:28,
  },
  ScrollViewStyle: {
    // backgroundColor:'orange',
    width: '100%',
    height: '100%',
  },
  image: {
    width: 250,
    height: 250,
  },
  optionsButtonsStyle: {
    //   backgroundColor:'green',
    width: '100%',
    height: 40,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 20,
    marginBottom: 10,
  },
  textOnConnectButton: {
    fontSize: 24,
  }
})