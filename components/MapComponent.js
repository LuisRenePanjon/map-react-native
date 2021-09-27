import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default () => {
    return (<MapView style={styles.map}/>);
}

const styles = StyleSheet.create({
    map: {
        height: height,
        width: width,
      },
});