import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import SwiperCard from '../components/SwiperCard';
import ItemList from '../components/ItemList';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <ScrollView>
        <SwiperCard />
        <ItemList />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default CartScreen;
