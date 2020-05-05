import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../commons/constants';

const PlusButton = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => alert('add')}>
      <LinearGradient
        style={styles.linearGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[COLORS.BLUE_BTN_START, COLORS.BLUE_BTN_END]}>
        <Icon name="plus" color={COLORS.WHITE} size={26} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
  },
  linearGradient: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlusButton;
