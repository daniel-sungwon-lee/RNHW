import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TypeWriter from 'react-native-typewriter';

const styles = StyleSheet.create({
    text: {
        fontSize: 33,
        color: "black"
      },
});

const Header = () => {
    return (
        <View>
            <TypeWriter typing={1} style={styles.text}>Let the Battle Begin!</TypeWriter>
        </View>
    )
}

export default Header

