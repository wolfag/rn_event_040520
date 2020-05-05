import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';
import ItemLine from '../components/ItemLine';
import Icon from 'react-native-vector-icons/Feather';
import ItemsBar from '../components/ItemsBar';
import {ScrollView} from 'react-native-gesture-handler';
import {commonStyles} from '../commons/styles';
import LinearGradient from 'react-native-linear-gradient';

const CATS = [
  {
    id: '1',
    icon: 'mic',
    name: 'Record',
  },
  {
    id: '2',
    icon: 'message-square',
    name: 'Forum',
  },
  {
    id: '3',
    icon: 'clock',
    name: 'Task',
  },
  {
    id: '0',
    icon: 'pie-chart',
    name: 'Report',
  },
];

const ProfileScreen = ({avatar, name}) => {
  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={[commonStyles.full, styles.container]}>
        <View style={commonStyles.mh20}>
          <View style={[commonStyles.fullLineBetween, commonStyles.mb20]}>
            <Icon name="bell" size={25} />
            <Icon name="settings" size={25} />
          </View>
          <View style={[commonStyles.fullLine, commonStyles.mb20]}>
            <View>
              <Text style={styles.name}>{name}</Text>
              <View style={commonStyles.fullLine}>
                <LinearGradient
                  style={styles.circle}
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 0}}
                  colors={['#83A0FE', '#FCEAEC']}>
                  <Icon name="loader" color="#fff" />
                </LinearGradient>

                <LinearGradient
                  style={[commonStyles.fullLine, styles.roundBar]}
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 0}}
                  colors={['#6688F9', '#FCEAEC']}>
                  <Text style={styles.manager}>Manager</Text>
                  <Icon name="chevron-right" color="#fff" />
                </LinearGradient>
              </View>
            </View>
            <View style={commonStyles.full} />
            <View style={styles.avatarStyle}>
              <Image source={{uri: avatar}} style={commonStyles.imgFull} />
            </View>
          </View>
          <ItemsBar items={CATS} />
        </View>
        <ScrollView style={commonStyles.full}>
          <View style={styles.line} />
          <View style={commonStyles.mh20}>
            <ItemLine
              icon={<Icon name="briefcase" size={26} color="#7091FB" />}
              label="Client"
            />
            <ItemLine
              icon={<Icon name="hexagon" size={26} color="#6FE4EA" />}
              label="Reception"
              tail="Today's"
            />
          </View>

          <View style={styles.line} />
          <View style={commonStyles.mh20}>
            <ItemLine
              icon={<Icon name="aperture" size={26} color="#FEE17B" />}
              label="Notification"
              tail="Unread 2"
            />
            <ItemLine
              icon={<Icon name="award" size={26} color="#92ABFF" />}
              label="Questionaire"
            />
            <ItemLine
              icon={<Icon name="chrome" size={26} color="#08D2E2" />}
              label="Knowledge base"
            />
          </View>
          <View style={styles.line} />
          <View style={commonStyles.mh20}>
            <ItemLine
              icon={<Icon name="codepen" size={26} color="#ACBFFD" />}
              label="Message"
            />
            <ItemLine
              icon={<Icon name="crosshair" size={26} color="#FF9CAC" />}
              label="Q&F"
              tail="V4.0.2"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

ProfileScreen.defaultProps = {
  name: 'Wolfag',
  avatar:
    'https://cn.i.cdn.ti-platform.com/cnapac/content/438/showpage/teen-titans-go%21/sa/showicon.png',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  line: {
    borderWidth: 1,
    borderColor: '#FAFBFC',
  },
  name: {fontSize: 20, fontWeight: 'bold', marginBottom: 5},
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  roundBar: {
    paddingLeft: 20,
    paddingRight: 5,
    height: 25,
    zIndex: 1,
    marginLeft: -10,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  avatarStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FCEAEC',
    overflow: 'hidden',
  },
  manager: {color: '#fff', marginRight: 10},
});

export default ProfileScreen;
