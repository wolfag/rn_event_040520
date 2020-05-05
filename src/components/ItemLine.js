import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {commonStyles} from '../commons/styles';

const ItemLine = ({icon, label, tail, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[commonStyles.fullLineBetween, styles.container]}>
      <View style={commonStyles.fullLine}>
        {icon ? icon : <Icon name="home" size={24} />}
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={commonStyles.fullLine}>
        <Text style={styles.tail}>{tail}</Text>
        <Icon name="chevron-right" size={20} color="#A9ACB4" />
      </View>
    </TouchableOpacity>
  );
};

ItemLine.defaultProps = {
  label: 'Home',
  tail: '',
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  label: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: '500',
    color: '#2D3A42',
  },
  tail: {color: '#A9ACB4', fontSize: 16, marginRight: 20},
});

export default React.memo(ItemLine);
