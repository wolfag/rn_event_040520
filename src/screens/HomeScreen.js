import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import SwiperCard from '../components/SwiperCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <SwiperCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
