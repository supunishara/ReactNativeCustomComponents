import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default class Settings extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return <View style={styles.Container}></View>;
  }
}

const styles = StyleSheet.create({
  Container: {
    width: Width,
    height: Height,
    backgroundColor: 'yellow',
  },
});
