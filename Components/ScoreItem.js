import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {icons} from './icons';

//Custom ScoreItem
const ScoreItem = ({title, icon, score}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View style={{flexDirection: 'row', marginVertical: 10}}>
      <Image style={styles.icon} source={icon} />
      <Text style={styles.scoreText}>{score}</Text>
      <Image style={styles.icon} source={icons.exclamark.uri} />
    </View>
  </View>
);

export default ScoreItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  },
  icon: {
    width: 18,
    height: 18,
  },
  title: {
    fontSize: 10,
    fontFamily: 'Avenir-Heavy',
    color: '#9B9B9B',
  },
  scoreText: {
    fontSize: 20,
    fontFamily: 'Avenir-Medium',
    marginHorizontal: 10,
    marginTop: -3,
  },
});
