import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CountDown from 'react-native-countdown-component';

const styles = StyleSheet.create({
    container: {
    },
    invert: {
        transform: [{rotate: "180deg"}]
    }
})

const Timer = ({ play, time }) => {
  return (
   <View style={styles.container}>
   <CountDown
        style={styles.invert}
        running={play}
        size={30}
        until={time}
        digitStyle={{backgroundColor: "transparent"}}
        digitTxtStyle={{color: "#1dbf73"}}
        onFinish={() => alert("Time!")}
        timeLabels={{s: null}}
        timeToShow={["S"]}/>
    <CountDown
     running={play}
     size={30}
     until={time}
     digitStyle={{backgroundColor: "transparent"}}
     digitTxtStyle={{color: "#1dbf73"}}
     onFinish={() => alert("Time!")}
     timeLabels={{s: null}}
     timeToShow={["S"]}/>
   </View>
  )

}

export default Timer