import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Button = ({onPress, title, state, style}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style, state ? styles.active : styles.inactive]}
      onPress={onPress}>
      <Text
        style={[styles.title, state ? styles.activeTxt : styles.inactiveTxt]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    width: 110,
  },
  inactive: {
    borderWidth: 1,
    borderColor: '#DDDDE2',
  },
  active: {
    backgroundColor: '#5E80FC',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  activeTxt: {
    color: '#D8DFFD',
  },
  inactiveTxt: {
    color: '#AEB3C0',
  },
});

export default Button;
