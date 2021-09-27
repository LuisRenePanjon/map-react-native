import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default ({ onLongPress }) => {

    return (<MapView style={styles.map} onLongPress={onLongPress}/>);
}

const styles = StyleSheet.create({
    map: {
        height: height - 100,
        width: width,
      },
});