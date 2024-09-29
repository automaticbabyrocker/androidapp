import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../utils/Header';
import FooterBar from '../utils/FooterBar';

export default function ScreenLayout({ children , hideFooter}) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 2 }}>
        <Header connectStatus={true} infoHeader={hideFooter}/>
      </View>
      <View style={{ flex: hideFooter ? 8 : 7 }}>
        {children}
      </View>
      {hideFooter ? null : 
      <View style={{flex: 1}}>
        <FooterBar />
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black'
  },
});
