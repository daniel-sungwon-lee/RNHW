import React from 'react';
import { Button, TouchableOpacity, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    button : {
        borderRadius: 30,
        elevation: 0,
        padding: 10,
        width: 234
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})

const AppButton = ({ onPress, title, backgroundColor }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[
                styles.button,
                backgroundColor && {backgroundColor}
            ]}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AppButton