/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Header from './header.js';
import AppButton from './button.js';
import Timer from './timer.js';
import Footer from './footer.js';

const App: () => React$Node = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [play, setPlay] = useState(false)
  const [id, setId] = useState("1")
  const [id2, setId2] = useState("2")

  const handlePress = () => {
      setCount(count +1)
      setPlay(true)
  }

  const handlePress2 = () => {
    setCount2(count2 +1)
    setPlay(true)
  }

  const handleReset = () => {
    setCount(0)
    setId(Math.random().toString())
    setPlay(false)
  }

  const handleReset2 = () => {
      setCount2(0)
      setId2(Math.random().toString())
      setPlay(false)
    }

  return (
    <>
      <Header />
      <View style={styles.container}>
       <View id="blue">
        <View style={styles.group}>
         <View style={styles.invert}>
          <AppButton title="Team Blue" backgroundColor="#0A95FF" padding={20} width={200}
           onPress={handlePress} />
         </View>
        </View>
        <View style={styles.group}>
         <View style={styles.invert}>
           <Text style={styles.text}>Team Blue Score</Text>
           <Text style={styles.score}>{count}</Text>
         </View>
        </View>
        <View style={styles.group}>
         <View style={styles.invert}>
          <AppButton title="Reset" backgroundColor="#CFCFCF" padding={5} width={100}
           onPress={handleReset} />
         </View>
        </View>
        <View>
         <Timer play={play} style={styles.invert} id={id} />
        </View>
       </View>
       <View id="red">
        <View>
         <Timer play={play} id={id2} />
        </View>
        <View style={styles.group}>
         <View>
          <AppButton title="Reset" backgroundColor="#CFCFCF" padding={5} width={100}
           onPress={handleReset2} />
         </View>
        </View>
        <View style={styles.group}>
         <View>
          <Text style={styles.text}>Team Red Score</Text>
          <Text style={styles.score}>{count2}</Text>
         </View>
        </View>
        <View style={styles.group}>
         <View>
          <AppButton title="Team Red" backgroundColor="#E00016" padding={20} width={200}
           onPress={handlePress2} />
         </View>
        </View>
       </View>
      </View>
      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 115,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  group: {
    alignItems: "center",
    padding: 3.5,
  },
  text: {
    color: "black",
    fontSize: 23
  },
  score: {
    color: "#1dbf73",
    fontSize: 26,
    alignSelf: "center"
  },
  separator: {
    padding: 20
  },
  invert: {
    transform: [{rotate: "180deg"}]
  }
});

export default App;
