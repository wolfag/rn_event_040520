import React from 'react';
import {View, StyleSheet} from 'react-native';
import OrderItemCard from '../components/OrderItemCard';
import {FlatList} from 'react-native-gesture-handler';

const OrderAllScreen = ({list}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => <OrderItemCard {...item} />}
      />
    </View>
  );
};

OrderAllScreen.defaultProps = {
  list: [
    {
      id: 1,
      time: '02/05/2020 07:00',
      type: 'Obligation',
      list: [
        {
          id: 1,
          img:
            'https://salt.tikicdn.com/cache/280x280/ts/product/1c/6b/d2/e4018793a3565f2736b726b8daf1a333.jpg',
          name: 'Pure list soft chair2',
          price: 2400,
          amount: 2,
        },
        {
          id: 2,
          img:
            'https://salt.tikicdn.com/cache/280x280/ts/product/ad/6d/4b/698710c5a8a893767a67c6749bfbc06c.jpg',
          name: 'Green soft chair',
          price: 0,
          amount: 1,
        },
      ],
    },
    {
      id: 2,
      time: '02/05/2020 07:00',
      type: 'Done',
      list: [
        {
          id: 1,
          img:
            'https://salt.tikicdn.com/cache/280x280/ts/product/ad/6d/4b/698710c5a8a893767a67c6749bfbc06c.jpg',
          name: 'A pair of deck chair',
          price: 1200,
          amount: 1,
        },
      ],
    },
  ],
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9FB',
    flex: 1,
  },
});

export default OrderAllScreen;
