import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const OrderSearchBar = ({onSearch}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.order}>Order</Text>
        <Icon
          style={styles.icon}
          name="search"
          size={20}
          color="#737B90"
          onPress={onSearch}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  order: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {marginRight: 20},
});

export default React.memo(OrderSearchBar);
