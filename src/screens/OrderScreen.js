import React from 'react';
import {View, Text} from 'react-native';
import OrderSearchBar from '../components/OrderSearchBar';
import OrderTab from '../routes/OrderTab';

const OrderScreen = () => {
  return (
    <View>
      <OrderSearchBar />
      <OrderTab />
    </View>
  );
};

export default OrderScreen;
