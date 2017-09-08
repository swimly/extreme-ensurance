import React, {Component} from 'react';
import {
  View,
  TouchableNativeFeedback,
  Text
}from 'react-native';
export default class MeScreen extends Component {
  static navigatorStyle = {
    navBarTextColor: '#fff',
    navBarBackgroundColor: '#EB3D00',
    statusBarColor:'#EB3D00'
  }
  static navigatorButtons = {
    rightButtons: [{
      icon: require('../assets/images/message.png'),
      id: 'message'
    }, {
      icon: require('../assets/images/setting.png'),
      id: 'message'
    }]
  }
  _jump (options) {
    this.props.navigator.push({
      screen: options.screen,
      title: options.title || '',
      animationType: 'slide-horizontal'
    })
  }
  render () {
    return (
      <View>
        <TouchableNativeFeedback
          onPress={()=>this._jump({screen:'app.LoginScreen',title:'用户登录'})}
        >
          <View>
            <Text>首页</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}