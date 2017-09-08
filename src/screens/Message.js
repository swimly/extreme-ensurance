import React, {Component} from 'react';
import {
  View,
  Text
}from 'react-native';
var firstClick = 0;
export default class MessageScreen extends Component {
  static navigatorStyle = {
    statusBarTextColorScheme: 'dark',
    tabBarHidden: true,
    screenBackgroundColor: '#fff',
    disabledBackGesture: true
  }
  static navigatorButtons = {
    leftButtons: [
      {
        icon: require('../assets/images/back.png'),
        id: 'back'
      }
    ]
  };
  constructor (props) {
    super(props)
    console.log(this)
  }
  render () {
    return (
      <View>
        <Text>消息</Text>
      </View>
    )
  }
}