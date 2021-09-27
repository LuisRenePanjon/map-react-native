import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ButtonsPanelComponent, MapComponent, ModalComponent } from './components';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function App() {
	const handleLongPress = ({nativeEvent}) => {
        const coordinates = nativeEvent.coordinate;
		
		console.log(coordinates);
    }
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<MapComponent onLongPress={handleLongPress} />
			<ButtonsPanelComponent />
			<ModalComponent />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#fff',
		flex: 1,
		justifyContent: 'flex-start',
		// paddingTop: 30,
	},
});
