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

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.group}>
         <View style={styles.invert}>
          <AppButton title="Team Blue" backgroundColor="#0A95FF" onPress={() => setCount(count +1)} />
         </View>
        </View>
        <View style={styles.group}>
          <View style={styles.invert}>
            <Text style={styles.text}>Team Blue Score</Text>
            <Text style={styles.score}>{count}</Text>
          </View>
          <View style={styles.separator}>
            <View style={styles.invert}>
             <AppButton title="Reset" backgroundColor="#CFCFCF" onPress={() => setCount(0)} />
            </View>
            <Timer play={play} />
            <View>
             <AppButton title="Reset" backgroundColor="#CFCFCF" onPress={() => setCount2(0)} />
            </View>
          </View>
          <View>
            <Text style={styles.text}>Team Red Score</Text>
            <Text style={styles.score}>{count2}</Text>
          </View>
        </View>
        <View style={styles.group} onPress={() => setPlay(true)}>
          <AppButton title="Team Red" backgroundColor="#E00016" onPress={() => setCount2(count2 +1)} />
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
    justifyContent: "space-between"
  },
  group: {
    alignItems: "center"
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
