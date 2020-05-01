/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <View>
      <Text>Hello</Text>
      <Icon name="rocket" size={30} color="#900" />
    </View>
  );
};

export default App;
