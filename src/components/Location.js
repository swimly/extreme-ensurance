import React, {Component} from 'react';
import {
  View,
  Text
}from 'react-native';
export default class LocationComponent extends Component {
  static navigatorStyle = {
    statusBarTextColorScheme: 'dark',
    tabBarHidden: true,
    screenBackgroundColor: '#fff',
    disabledBackGesture: true
  }
  render () {
    return (
      <View>
        <Text>定位</Text>
      </View>
    )
  }
}