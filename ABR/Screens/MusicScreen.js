import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ScreenLayout from './ScreenLayout';
import NavigationButtons from '../utils/NavigationButtons';
import * as DocumentPicker from 'expo-document-picker';
import { Audio } from 'expo-av';

export default function MusicScreen({ navigation }) {
  const [sound, setSound] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const pickAudioFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'audio/*',
      });

      if (result.type === 'success') {
        setFileName(result.name);

        if (sound) {
          const status = await sound.getStatusAsync();
          if (status.isLoaded) {
            await sound.unloadAsync();
          }
        }

        const { sound: newSound } = await Audio.Sound.createAsync({ uri: result.uri });
        setSound(newSound);
      }
    } catch (error) {
      console.error('Error picking audio file:', error);
    }
  };

  const playPauseAudio = async () => {
    try {
      if (sound) {
        if (isPlaying) {
          await sound.pauseAsync();
          setIsPlaying(false);
        } else {
          await sound.playAsync();
          setIsPlaying(true);
        }
      }
    } catch (error) {
      console.error('Error in play/pause:', error);
    }
  };

  const seekForward = async () => {
    try {
      if (sound) {
        const status = await sound.getStatusAsync();
        if (status.isLoaded && status.positionMillis + 5000 < status.durationMillis) {
          await sound.setPositionAsync(status.positionMillis + 5000);
        }
      }
    } catch (error) {
      console.error('Error seeking forward:', error);
    }
  };

  const seekBackward = async () => {
    try {
      if (sound) {
        const status = await sound.getStatusAsync();
        if (status.isLoaded && status.positionMillis - 5000 > 0) {
          await sound.setPositionAsync(status.positionMillis - 5000);
        }
      }
    } catch (error) {
      console.error('Error seeking backward:', error);
    }
  };

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Text style={styles.title}>נגן מוזיקה</Text>

        <Button title="בחר קובץ אודיו" onPress={pickAudioFile} />

        {fileName ? <Text style={styles.fileName}>{fileName}</Text> : null}

        {sound && (
          <View style={styles.controls}>
            <TouchableOpacity style={styles.controlButton} onPress={seekBackward}>
              <Text style={styles.controlText}>⏪</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton} onPress={playPauseAudio}>
              <Text style={styles.controlText}>{isPlaying ? '⏸️' : '▶️'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.controlButton} onPress={seekForward}>
              <Text style={styles.controlText}>⏩</Text>
            </TouchableOpacity>
          </View>
        )}

        <NavigationButtons navigation={navigation} page={'Music'} />
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fileName: {
    fontSize: 16,
    marginVertical: 10,
    color: '#333',
  },
  controls: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-evenly',
    width: '80%',
  },
  controlButton: {
    backgroundColor: '#A64D79',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
