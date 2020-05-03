import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {commonStyles} from '../commons/styles';
import LinearGradient from 'react-native-linear-gradient';

const OrderItem = ({name, price, amount, img}) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.imgBlock}>
        <Image
          source={{uri: img}}
          resizeMode="contain"
          style={commonStyles.imgFull}
        />
      </View>
      <View style={styles.infoBlock}>
        <View style={commonStyles.fullLineBetween}>
          <Text style={commonStyles.txtLight}>{name}</Text>
          <Text style={commonStyles.txtGray}>x {amount}</Text>
        </View>
        {price > 0 && <View />}
        {price > 0 && (
          <View>
            <Text style={commonStyles.txtBold}>$ {price}</Text>
          </View>
        )}

        {price === 0 && (
          <LinearGradient
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}
            style={styles.giftBlock}
            colors={['#6386FA', '#8FA9FE']}>
            <Text style={commonStyles.txtWhite}>Gift</Text>
          </LinearGradient>
        )}
        {price === 0 && <View />}
      </View>
    </View>
  );
};

OrderItem.defaultProps = {
  img:
    'https://salt.tikicdn.com/cache/280x280/ts/product/ad/6d/4b/698710c5a8a893767a67c6749bfbc06c.jpg',
  name: 'Green soft chair1',
  price: 0,
  amount: 1,
  isNew: true,
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
    height: 70,
  },
  imgBlock: {
    flex: 1,
  },
  infoBlock: {
    flex: 2,
    marginLeft: 20,
    height: '100%',
    justifyContent: 'space-between',
  },
  giftBlock: {
    padding: 2,
    width: 50,
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default React.memo(OrderItem);
