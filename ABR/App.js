import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator ,CardStyleInterpolators} from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen.js';
import BluetoothScreen from './Screens/BluetoothScreen.js';
import InfoScreen from './Screens/InfoScreen.js';
import Header from './utils/Header.js';
import SpeedTimeScreen from './Screens/SpeedTimeScreen.js';
import HelpAndSupport from './Screens/HelpAndSupport.js';
import SettingScreen from './Screens/SettingScreen.js';
import BatteryScreen from './Screens/BatteryScreen.js';
import MusicScreen from './Screens/MusicScreen.js';
export default function App() {
  const Stack = createStackNavigator();

  return (
       <NavigationContainer>
        <Stack.Navigator 
              initialRouteName="Home"ר
              screenOptions={{
                headerShown:false,
              }}
              >

           <Stack.Screen name="Home" component={HomeScreen} />
           <Stack.Screen name="Bluetooth" component={BluetoothScreen}/>
           <Stack.Screen name="SpeedTime" component={SpeedTimeScreen}/>
           <Stack.Screen 
              name="Info" component={InfoScreen}
              options={{
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOSInverted // Left to Right
                }}/>
           <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
           <Stack.Screen name="Setting" component={SettingScreen} />
           <Stack.Screen name="Music" component={MusicScreen} />
           <Stack.Screen name="Battery" component={BatteryScreen} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}