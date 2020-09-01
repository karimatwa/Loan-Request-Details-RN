import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//Custom App button
const AppButton = ({onPress, title, Bcolor, Tcolor, Grad}) =>
  Grad ? (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: Bcolor}]}
      onPress={onPress}>
      <LinearGradient
        colors={['#568FFC', '#BF2BFF']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={styles.button}>
        <Text style={[styles.text, {color: Tcolor}]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: Bcolor}]}
      onPress={onPress}>
      <Text style={[styles.text, {color: Tcolor}]}>{title}</Text>
    </TouchableOpacity>
  );

export default AppButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    justifyContent: 'center',
    width: 315,
    height: 48,
    marginVertical: 3,
    shadowColor: 'rgba(0,0,0,0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 5,
      width: -0.5,
    },
  },
  text: {
    fontSize: 15,
    fontFamily: 'Avenir-Heavy',
    textAlign: 'center',
  },
});
