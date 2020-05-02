import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../commons/constants';
import ItemCard from './ItemCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

const CATS = [
  {
    id: '1',
    icon: 'box',
    name: 'Bed',
  },
  {
    id: '2',
    icon: 'camera',
    name: 'Sofa',
  },
  {
    id: '3',
    icon: 'clock',
    name: 'Closet',
  },
  {
    id: '0',
    icon: 'radio',
    name: 'All',
  },
];

const ItemList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        {CATS.map((item) => {
          return (
            <View key={item.id} style={styles.iconBlock}>
              <Icon name={item.icon} size={30} color={COLORS.BLUE_OUTLINE} />
              <Text style={styles.iconName}>{item.name}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.title}>
        <Text style={styles.choiceness}>Choiceness</Text>
        <TouchableOpacity style={styles.moreBlock}>
          <Text style={styles.more}>More</Text>
          <Icon name="chevron-right" color={COLORS.GRAY_LIGHT} />
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        {[1, 2, 3].map((item, index) => {
          return <ItemCard key={index} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  list: {
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5.46,
    elevation: 5,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  moreBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  more: {
    color: COLORS.GRAY_LIGHT,
    fontSize: 15,
  },
  choiceness: {
    color: COLORS.BLACK_LIGHT,
    fontSize: 20,
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  iconBlock: {
    display: 'flex',
    alignItems: 'center',
  },
  iconName: {
    marginTop: 5,
    color: COLORS.GRAY_LIGHT,
    fontSize: 15,
  },
});

export default ItemList;
