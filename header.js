import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TypeWriter from 'react-native-typewriter';

const styles = StyleSheet.create({
    text: {
        fontSize: 33,
        color: "black",
        textTransform: "uppercase",
        position: "absolute",
        bottom: 10,
        left: 20
      },
      invert: {
        transform: [{rotate: "180deg"}]
      }
});

const Header = () => {
    return (
        <View style={styles.invert}>
            <TypeWriter typing={1} style={styles.text}>2Buttons</TypeWriter>
        </View>
    )
}

export default Header

