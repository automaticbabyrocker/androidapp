import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ScreenLayout from './ScreenLayout'
import { FontAwesome } from '@expo/vector-icons';

export default function HelpAndSupport({ navigation }) {
  const [msg, setMsg] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <ScreenLayout hideFooter={true}>
      <View style={style.container}>
        <View style={style.titleDiv}>
          <Text style={style.title}>
            Help & Support <FontAwesome
              name="question-circle"
              size={24}
              color="black" />
          </Text>
        </View>
        <View style={style.InputsView}>
          <TextInput
            style={style.input}
            placeholder="Enter text here"
            placeholderTextColor="#aaa"
            value={msg}
            onChangeText={setMsg}
          />
          <TextInput
            style={style.input}
            placeholder="Email address"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
          />
          <TextInput
            style={style.input}
            placeholder="Phone"
            placeholderTextColor="#aaa"
            value={phone}
            onChangeText={setPhone}
            keyboardType='phone-pad'
            maxLength={10}
          />
          <TouchableOpacity style={style.sendButton}>
            <Text>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenLayout>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleDiv:{
    // backgroundColor:'blue',
    height:'20%'
  },
  title: {
    fontSize: 28,
  },
  InputsView: {
    // backgroundColor: 'orange',
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent:'space-evenly'
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
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  sendButton:{
    backgroundColor:'#FEECB5',
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
  }
})