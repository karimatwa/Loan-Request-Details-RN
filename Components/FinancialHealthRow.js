import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {icons} from './icons';

// 1 row of the FinancialHealth Section
const FinancialHealthRow = ({title, text, status, title2, text2, status2}) => (
  <View style={styles.container}>
    <View style={styles.area}>
      <View>
        <Image style={styles.status} source={status} />
      </View>
      <View style={{flex: 0.72, marginHorizontal: 10}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View
        style={{
          flex: 0.28,
          marginTop: 20,
          height: '100%',
        }}>
        <Image style={styles.icon} source={icons.exclamark.uri} />
      </View>
    </View>
    <View style={styles.area}>
      <View>
        <Image style={styles.status} source={status2} />
      </View>
      <View style={{flex: 0.72, marginHorizontal: 10}}>
        <Text style={styles.title}>{title2}</Text>
        <Text style={styles.text}>{text2}</Text>
      </View>
      <View
        style={{
          flex: 0.28,
          marginTop: 20,
          height: '100%',
        }}>
        <Image style={styles.icon} source={icons.exclamark.uri} />
      </View>
    </View>
  </View>
);

export default FinancialHealthRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  area: {
    height: 65,
    width: 175,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 6,
    borderRadius: 6,
    shadowColor: 'rgba(0,0,0,0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 3,
      width: 0.5,
    },
  },
  status: {
    height: 65,
  },
  icon: {
    width: 18,
    height: 18,
    marginLeft: 15,
    marginTop: -3,
  },
  title: {
    fontSize: 10,
    fontFamily: 'Avenir-Heavy',
    fontWeight: '800',
    color: '#9B9B9B',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Avenir-Medium',
    fontWeight: '600',
    marginTop: 3,
  },
});
