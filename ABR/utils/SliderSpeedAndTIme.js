import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';

export default function SliderSpeedAndTime({
  title,
  minimumValue,
  maximumValue,
  step,
  value,
  onValueChange,
  minimumTrackTintColor = "#f5cb4c",
  maximumTrackTintColor = "#FEECB5",
  thumbTintColor = "#f5cb4c"
}) {
  const [isSliding, setIsSliding] = useState(false);
  const [sliderWidth, setSliderWidth] = useState(0);

  const calculateThumbPosition = (sliderValue) => {
    const trackWidth = sliderWidth - 40; // Subtract padding of the thumb
    const relativeValue = (sliderValue - minimumValue) / (maximumValue - minimumValue);
    return relativeValue * trackWidth + 20; // Add thumb padding
  };

  return (
    <View style={styles.sliderContainer}>

      <View
        style={{ position: 'relative', width: '100%' }}
        onLayout={(e) => setSliderWidth(e.nativeEvent.layout.width)}
      >
        {isSliding && (
            <View style={[
                styles.valueContainer,
                { left: calculateThumbPosition(value) - 20 } // Center the text above the thumb
            ]}>
            <Text style={styles.valueText}>{value}</Text>
          </View>
        )}

        <Slider
          style={styles.slider}
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          step={step}
          value={value}
          onValueChange={onValueChange}
          onSlidingStart={() => setIsSliding(true)}
          onSlidingComplete={() => setIsSliding(false)}
          minimumTrackTintColor={minimumTrackTintColor}
          maximumTrackTintColor={maximumTrackTintColor}
          thumbTintColor={thumbTintColor}
        />
      </View>
      <Text style={styles.label}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
  valueContainer: {
    position: 'absolute',
    bottom: 50,
    width: 40,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5cb4c',
    borderRadius: 12,
  },
  valueText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
