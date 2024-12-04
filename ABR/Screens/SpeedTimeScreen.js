import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import ScreenLayout from './ScreenLayout';
import NavigationButtons from '../utils/NavigationButtons';
import SliderSpeedAndTIme from '../utils/SliderSpeedAndTIme';

export default function SpeedTimeScreen({ navigation }) {
  const [speed, setSpeed] = useState(50);
  const [time, setTime] = useState(15);

  return (
    <ScreenLayout navigation={navigation} page={"SpeedTime"}>
      <View style={styles.centerContainer}>
        <Image source={require('../Images/babyStrollerImage.jpg')} style={styles.image} />

        <SliderSpeedAndTIme
          title="Speed"
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={speed}
          onValueChange={setSpeed}
        />
        <SliderSpeedAndTIme
          title="Time"
          minimumValue={0}
          maximumValue={30}
          step={5}
          value={time}
          onValueChange={setTime}
        />
       
        {/* <NavigationButtons navigation={navigation} page={"SpeedTime"}/> */}
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  centerContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 9,
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  sliderContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  slider: {
    width: '100%',
    height: 40,
  },
});
