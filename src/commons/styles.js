import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  full: {
    flex: 1,
  },
  fullLine: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullLineBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  p10: {
    padding: 10,
  },
  p20: {
    padding: 20,
  },

  m10: {
    margin: 10,
  },
  mr10: {
    marginRight: 10,
  },

  m20: {
    margin: 20,
  },
  mr20: {
    marginRight: 20,
  },
  mb20: {
    marginBottom: 20,
  },
  mt20: {
    marginTop: 20,
  },
  mh20: {
    marginHorizontal: 20,
  },

  txtGray: {color: '#AEB6B8'},
  txtBlue: {color: '#7694FC'},
  txtWhite: {color: '#EDF2FE'},
  txtBold: {
    fontWeight: '700',
  },
  txtLight: {
    fontWeight: '500',
  },
  imgFull: {
    width: '100%',
    height: '100%',
  },
});

export {commonStyles};
