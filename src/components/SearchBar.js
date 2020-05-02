import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search for your favorite"
        />
        <Icon style={styles.icon} name="search" size={20} color="#737B90" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#F5F8F9',
    backgroundColor: '#F8F9FB',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
  },
  input: {
    height: 40,
    paddingLeft: 20,
    paddingRight: 10,
    flex: 1,
  },
  icon: {marginRight: 20},
});

export default SearchBar;
