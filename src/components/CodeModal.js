import React, {Component} from 'react';
import {
  View,
  Animated,
  Text
}from 'react-native';
import QRCode from 'react-native-qrcode';
export default class CodeModalComponent extends Component {
  static navigatorStyle = {
    statusBarTextColorScheme: 'light',
    tabBarHidden: true,
    navBarHidden: true,
    screenBackgroundColor: 'rgba(0,0,0,0.2)',
    disabledBackGesture: true,
    statusBarColor:'rgba(0,0,0,0.2)'
  }
  componentWillMount() {
    
  }
  render () {
    return (
      <View
        style={{flex:1,flexDirection:'column',alignItems:'center',justifyContent:'center'}}
      >
        <View 
          style={{backgroundColor:'#fff',alignSelf:'center',padding:20,borderRadius:10,paddingLeft:30,paddingRight:30}}
        >
          <QRCode
            value={'fawefawe'}
            size={140}
            bgColor='#333'
            fgColor='white'/>
          <Text
            style={{fontSize:12,color:'#666',alignSelf:'center',marginTop:10}}
          >扫一扫，加入我们！</Text>
        </View>
      </View>
    )
  }
}