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

const App: () => React$Node = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <>
      <Header style={styles.text} />
      <View style={styles.container}>
        <View>
          <AppButton title="Team Blue" backgroundColor="#0A95FF" onPress={() => setCount(count +1)} />
          <Text>Team Blue Score: {count}</Text>
        </View>
        <View>
          <AppButton title="Team Red" backgroundColor="red" onPress={() => setCount2(count2 +1)} />
          <Text>Team Red Score: {count2}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 115,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  }
});

export default App;
