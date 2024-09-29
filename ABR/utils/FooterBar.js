import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function FooterBar() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevValue => !prevValue);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={()=>console.log("Mode 1")}>
        <View style={styles.circle}>
            <Text style={styles.optionText}>Mode 1</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.toggleButton, isOn && styles.toggleOn]} onPress={toggleSwitch}>
        <Text style={styles.toggleText}>{isOn ? 'ON' : 'OFF'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={()=>console.log("Mode 2")}>
        <View style={styles.circle}>
            <Text style={styles.optionText}>Mode 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#3B1C32',
    width: '100%',
    flex:1,
    alignSelf: 'center',
  },
  option: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: '#D3D3D3',
    borderRadius: 25,
    marginBottom: 5,
    alignItems:'center',
    justifyContent:'center',
  },
  optionText: {
    fontSize: 12,
    color: 'black',
  },
  toggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A9A9A9',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  toggleOn: {
    backgroundColor: '#9370DB',
  },
  powerIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'black',
    marginRight: 10,
  },
  toggleText: {
    fontSize: 14,
    color: 'white',
  },
});
