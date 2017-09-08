import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Clipboard,
  Platform,
  ToastAndroid,
  Share,
  StyleSheet,
  Text
}from 'react-native';
export default class ShareComponent extends Component {
  static navigatorStyle = {
    statusBarTextColorScheme: 'dark',
    tabBarHidden: true,
    screenBackgroundColor: '#fff',
    disabledBackGesture: true
  }
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }
  _share(){
    Share.share({
      message: 'A framework for building native apps using React',
      url: 'http://facebook.github.io/react-native/',
      title: 'React Native'
    }, {
      dialogTitle: '分享',
      excludedActivityTypes: [
        'com.apple.UIKit.activity.PostToTwitter'
      ],
      tintColor: 'green'
    })
    .then(this._showResult)
    .catch((error) => this.setState({result: 'error: ' + error.message}));
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={()=>this._share()}
        >
          <Text>share</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});