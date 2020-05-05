import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import {COLORS} from '../commons/constants';
import {commonStyles} from '../commons/styles';
import img from '../assets/imgs/iphone.jpg';

const Card = () => (
  <View>
    <LinearGradient
      colors={[COLORS.BLUE_WEIGHT, COLORS.BLUE_MIDDLE, COLORS.BLUE_LIGHT]}
      style={[styles.card, styles.slide1]}>
      <View style={[commonStyles.full, {justifyContent: 'center'}]}>
        <Text style={[styles.text, styles.bigText]}>
          We create products not just art
        </Text>
        <Text style={[styles.text, styles.smallText]}>
          Our experience in the
        </Text>
      </View>
      <View style={[commonStyles.full, commonStyles.center]}>
        <Image source={img} style={commonStyles.imgFull} />
      </View>
    </LinearGradient>
    <LinearGradient colors={['#CFD4F0', '#fff']} style={styles.shadown} />
  </View>
);

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
        <Card />
        <Card />
        <Card />
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    paddingLeft: 20,
    paddingRight: 20,
  },
  swiperContainerStyle: {
    height: 100,
  },
  card: {
    display: 'flex',
    height: 200,
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
    height: 15,
    marginTop: 1,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 40,
    opacity: 0.4,
  },
});

export default SwiperCard;
