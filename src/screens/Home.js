import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  ScrollView,
  BackHandler,
  StyleSheet,
  ToastAndroid
}from 'react-native';
var firstClick = 0;
export default class HomeScreen extends Component {
  static navigatorStyle = {
    statusBarColor:'#FBFBFB',
    statusBarTextColorScheme: 'dark'
  }
  static navigatorButtons = {
    rightButtons: [{
      icon: require('../assets/images/homeRight.png'),
      id: 'message'
    }]
  }
  constructor (props) {
    super(props)
    console.log(this)
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this))
  }
  componentWillMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBack);
  }
  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
  }
  handleBack = () => {
    var timestamp = (new Date()).valueOf();
    if (timestamp - firstClick > 2000) {
        firstClick = timestamp;
        ToastAndroid.show('再按一次退出', ToastAndroid.SHORT);
        return true;
    } else {
        return false;
    }
  }
  onNavigatorEvent (event) {
    if (event.type === 'NavBarButtonPress') {
      if (event.id == 'message') {
        this._jump({
          screen: 'app.MessageScreen',
          title: '消息',
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
      <ScrollView
        style={{borderTopWidth:.5,borderColor:'#eee'}}
      >
        <TouchableNativeFeedback
          onPress={()=>this._jump({screen:'app.share',title:'分享'})}
        >
          <View
            style={[style.row]}
          >
            <Text>分享功能</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={()=>this._jump({screen:'app.location',title:'定位'})}
        >
          <View
            style={[style.row]}
          >
            <Text>定位</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={()=>this._jump({screen:'app.map',title:'地图'})}
        >
          <View
            style={[style.row]}
          >
            <Text>地图</Text>
          </View>
        </TouchableNativeFeedback>
      </ScrollView>
    )
  }
}
const style = StyleSheet.create({
  row: {
    padding:15
  }
})