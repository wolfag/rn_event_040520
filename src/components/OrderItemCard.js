import React, {useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Button from '../components/Button';
import OrderItem from './OrderItem';

function OrderItemCard({list, time, type}) {
  const total = useMemo(() => {
    return list.reduce((t, c) => {
      return t + c.price * c.amount;
    }, 0);
  }, [list]);

  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',

          padding: 20,

          borderBottomColor: '#F8F9FB',
          borderBottomWidth: 1,
        }}>
        <Text>{time}</Text>
        <TouchableOpacity>
          <Text>{type}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={list}
        renderItem={({item}) => <OrderItem {...item} />}
      />
      <View
        style={{
          padding: 20,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 20,
          }}>
          <View style={{flex: 1}} />
          <Text>Total</Text>
          <Text>${total}</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          <View style={{flex: 1}} />
          <Button style={{marginRight: 10}} title="Cancel" state={false} />
          <Button title="Pay" state={true} />
        </View>
      </View>
    </View>
  );
}

OrderItemCard.defaultProps = {
  time: '02/05/2020 07:00',
  type: 'Obligation',
  list: [
    {
      id: 1,
      name: 'Pure list soft chair',
      price: 2400,
      amount: 2,
    },
    {
      id: 2,
      name: 'Green soft chair',
      price: 0,
      amount: 1,
    },
  ],
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#fff',

    elevation: 20,
    shadowColor: '#ECF0F5',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
});

export default React.memo(OrderItemCard);
