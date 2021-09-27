import React, { useState } from 'react'
import {StyleSheet, Dimensions, Button, View} from 'react-native'

export const ButtonsPanelComponent = () => {
    const [showOrHideText, setShowOrHideText] = useState('Mostrar');
    
    const changeTextButton = ()=> {
        showOrHideText === 'MOSTRAR' 
            ? setShowOrHideText('Ocultar') 
            : setShowOrHideText('Mostrar');
    }
    return (
        <View style={styles.buttonsPanel}> 
            <Button title="Lista"/>
            <Button title={showOrHideText} />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsPanel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    
    },
    button : {
        marginRight: 10,
    },
})
