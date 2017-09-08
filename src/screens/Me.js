import React, {Component} from 'react';
import {
  View,
  BackHandler,
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
      id: 'setting'
    }]
  }
  constructor (props) {
    super(props)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }
  componentWillMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBack);
  }
  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
  }
  onNavigatorEvent (event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id == 'message') {
        this._jump({
          screen: 'app.MessageScreen',
          title: '消息',
          animationType: 'slide-horizontal'
        })
      } else {
        this._jump({
          screen: 'app.SettingScreen',
          title: '设置',
          animationType: 'slide-horizontal'
        })
      }
    }
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
            <Text>登录</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}