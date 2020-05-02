import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../commons/constants';

const ItemCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgBlock}>
        <Image
          source={require('../assets/imgs/item.jpg')}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <View style={styles.infoBlock}>
        <Text style={styles.title}>
          Title ash asdh asdh asdh shd ashda hasd
        </Text>
        <Text style={styles.description}>Short des</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
  },
  imgBlock: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  img: {width: '100%', height: '100%'},
  infoBlock: {
    flex: 2,
    padding: 20,
  },
  title: {
    color: COLORS.BLACK_LIGHT,
    fontSize: 15,
  },
  description: {
    color: COLORS.GRAY_LIGHT,
    fontSize: 10,
  },
});

export default ItemCard;
