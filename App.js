import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { MapComponent, ModalComponent } from './components';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor={'#fff'}/>
      <MapComponent/>
      <ModalComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 25,
  },
});
