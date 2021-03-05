import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        textAlign: "center"
    },
    text: {
        fontSize: 33,
        color: "red"
      },
});

const HelloWorld = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, World!</Text>
        </View>
    )
}

export default HelloWorld

