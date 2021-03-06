import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TypeWriter from 'react-native-typewriter';

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
            <TypeWriter typing={1} style={styles.text}>Hello, World!</TypeWriter>
        </View>
    )
}

export default HelloWorld

