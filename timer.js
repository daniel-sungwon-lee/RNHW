import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CountDown from 'react-native-countdown-component';

const styles = StyleSheet.create({
    container: {
        marginBottom: 20
    }
})

const Timer = ({ play }) => {
  return (
   <View style={styles.container}>
    <CountDown
     running={play}
     size={30}
     until={60}
     digitStyle={{backgroundColor: "transparent"}}
     digitTxtStyle={{color: "#1dbf73"}}
     onFinish={() => alert("Time!")}
     timeToShow={["S"]}/>
   </View>
  )

}

export default Timer