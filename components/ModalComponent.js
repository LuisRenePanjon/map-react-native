import React from 'react'
import { Dimensions, StyleSheet, Text, Modal, View } from 'react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default () => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={true} 
            onRequestClose={()=>{

            }}

        >
            <View styles={styles.center}>
                <View style={styles.modalContent}>
                    <Text>😇</Text>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    center: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent:{
        backgroundColor: '#fff',
        borderRadius: 15,
        marginTop:width *.9,
        marginHorizontal: 50,
        padding: 50,
        shadowColor: 'red',
        shadowOffset: {
            width: 0, 
            height: 4,
        }
    }
})
