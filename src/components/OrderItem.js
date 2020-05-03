import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const OrderItem = ({name, price, amount, img}) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.imgBlock}>
        <Text>Image</Text>
      </View>
      <View style={styles.infoBlock}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text>{name}</Text>
          <Text>x{amount}</Text>
        </View>
        {price ? (
          <View>
            <Text>${price}</Text>
          </View>
        ) : (
          <View>
            <Text>Gift</Text>
          </View>
        )}
      </View>
    </View>
  );
};

OrderItem.defaultProps = {
  img: '',
  name: 'Green soft chair',
  price: 0,
  amount: 1,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  imgBlock: {
    flex: 1,
  },
  infoBlock: {
    flex: 2,
  },
});

export default React.memo(OrderItem);
