import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import {COLORS} from '../commons/constants';

const SwiperCard = () => {
  return (
    <View style={styles.container}>
      <Swiper
        showsButtons={true}
        loop={true}
        autoplay={true}
        nextButton={() => null}
        prevButton={() => null}
        containerStyle={styles.swiperContainerStyle}>
        <View>
          <LinearGradient
            colors={[COLORS.BLUE_WEIGHT, COLORS.BLUE_MIDDLE, COLORS.BLUE_LIGHT]}
            style={[styles.card, styles.slide1]}>
            <View style={{flex: 1}}>
              <Text style={[styles.text, styles.bigText]}>
                We create products not just art
              </Text>
              <Text style={[styles.text, styles.smallText]}>
                Our experience in the
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text>Image here</Text>
            </View>
          </LinearGradient>
          <View style={styles.shadown} />
        </View>
        <View />
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    paddingLeft: 20,
    paddingRight: 20,
  },
  swiperContainerStyle: {
    height: 100,
  },
  card: {
    display: 'flex',
    height: 240,
    borderRadius: 20,
    padding: 20,
  },
  slide1: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
  },
  bigText: {
    fontSize: 25,
  },
  smallText: {
    fontSize: 10,
  },
  shadown: {
    height: 2,
    borderRadius: 30,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: '#fff',

    shadowColor: '#575DED',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16,

    elevation: 24,
  },
});

export default SwiperCard;
