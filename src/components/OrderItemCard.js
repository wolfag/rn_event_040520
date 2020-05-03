import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {commonStyles} from '../commons/styles';
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
      <View style={styles.header}>
        <Text style={[commonStyles.txtGray, commonStyles.txtLight]}>
          {time}
        </Text>

        <Text style={[commonStyles.txtBlue, commonStyles.txtLight]}>
          {type}
        </Text>
      </View>

      {list.map((item) => (
        <OrderItem key={item.id} {...item} />
      ))}

      <View style={commonStyles.p20}>
        <View style={[commonStyles.fullLine, commonStyles.mb20]}>
          <View style={commonStyles.full} />
          <Text style={[commonStyles.txtGray, commonStyles.mr10]}>Total:</Text>
          <Text style={commonStyles.txtBold}>$ {total}</Text>
        </View>
        {type !== 'Done' && (
          <View style={commonStyles.fullLine}>
            <View style={commonStyles.full} />
            <Button style={commonStyles.mr20} title="Cancel" state={false} />
            <Button title="Pay" state={true} />
          </View>
        )}
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
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    padding: 20,

    borderBottomColor: '#F8F9FB',
    borderBottomWidth: 1,
  },
});

export default React.memo(OrderItemCard);
