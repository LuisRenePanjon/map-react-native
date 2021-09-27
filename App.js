import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor={'#ffff'}/>
      <MapView style={styles.map}/>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: height,
    width: width,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
