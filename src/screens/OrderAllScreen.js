import React from 'react';
import {View, StyleSheet} from 'react-native';
import OrderItemCard from '../components/OrderItemCard';

const OrderAllScreen = () => {
  return (
    <View style={styles.container}>
      <OrderItemCard />
      <OrderItemCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9FB',
    flex: 1,
  },
});

export default OrderAllScreen;
