import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../commons/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ItemsBar = ({items, onPress, style}) => {
  const _onPress = (item) => () => {
    onPress && onPress(item);
  };

  return (
    <View style={[styles.container, style]}>
      {items.map((item) => {
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.iconBlock}
            onPress={_onPress(item)}>
            <Icon name={item.icon} size={30} color={COLORS.BLUE_OUTLINE} />
            <Text style={styles.iconName}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
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

ItemsBar.defaultProps = {
  items: [],
};

export default ItemsBar;
