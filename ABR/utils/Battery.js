import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Battery({ percentage }) {
  return (
    <View style={styles.container}>
      <View style={styles.batteryHead} />

      <View style={styles.battery}>
        <View style={[styles.batteryLevel, { height: `${percentage}%` }]} />
      </View>

      <Text style={styles.percentageText}>{percentage}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:60,
  },
  battery: {
    width: 120,
    height: 300,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
    overflow: 'hidden',
  },
  batteryLevel: {
    backgroundColor: '#4CAF50',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  batteryHead: {
    width: 30,
    height: 10,
    backgroundColor: 'black',
    borderRadius: 2,
  },
  percentageText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
