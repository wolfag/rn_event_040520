import React from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import SearchBar from '../components/SearchBar';
import SwiperCard from '../components/SwiperCard';
import ItemList from '../components/ItemList';
import {commonStyles} from '../commons/styles';

const CartScreen = () => {
  return (
    <SafeAreaView style={[commonStyles.container]}>
      <View style={styles.container}>
        <SearchBar />
        <ScrollView>
          <SwiperCard />
          <ItemList />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default CartScreen;
