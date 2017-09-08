import React, {Component} from 'react';
import {
  View,
  Image,
  ToastAndroid,
  Text
}from 'react-native';
import {
  Form,
  Item,
  Input,
  Button,
  Label
} from 'native-base';
import {login} from '../resource/api';
export default class LoginScreen extends Component {
  static navigatorStyle = {
    statusBarColor:'#FBFBFB',
    statusBarTextColorScheme: 'dark',
    tabBarHidden: true
  }
  static navigatorButtons = {
    leftButtons: [
      {
        icon: require('../assets/images/back.png'),
        id: 'back'
      }
    ]
  };
  _text (option) {
    this.setState({
      [option.name]:option.val
    })
  }
  handleLogin () {
    const {tel, pwd} = this.state;
    fetch(login + '?tel=' + tel + '&pwd=' + pwd)
    .then(res=>{
      res.json().then(res=>{
        if (res.status === 1) {
          ToastAndroid.show('登录成功！', ToastAndroid.SHORT);
          this.props.navigator.pop({
            animated: true, // does the pop have transition animation or does it happen immediately (optional)
            animationType: 'slide-horizontal', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
          });
        } else {
          ToastAndroid.show(res.msg, ToastAndroid.SHORT);
        }
      })
    })
  }
  render () {
    return (
      <View
        style={{padding:20,flex:1,backgroundColor:'#F7F7F7',borderTopWidth:1,borderColor:'#E0E0E0',flexDirection:'row',alignItems:'center'}}
      >
      <Form
        style={{flex:1}}
      >
        <Image style={{height:60,aspectRatio:2.66,alignSelf:'center',marginBottom:50,marginTop:-50}} source={require('../assets/images/logo.png')}/>
        <Item
          regular
          last
          style={{backgroundColor:'#fff',borderRadius:5,borderWidth:.5,borderColor:'#E5E5E5'}}
        >
          <Image style={{width:20,height:30,margin:0}} source={require('../assets/images/phone.png')}/>
          <Input 
            placeholder="请输入手机号" 
            placeholderTextColor="#C1C1C1" 
            onChangeText={text=>this._text({name:'tel',val:text})}
            keyboardType="numeric"
            maxLength={11}
          />
        </Item>
        <Item
          regular
          last
          style={{backgroundColor:'#fff',marginTop:10,borderRadius:5,borderWidth:.5,borderColor:'#E5E5E5'}}
        >
          <Image style={{width:20,height:30}} source={require('../assets/images/pwd.png')}/>
          <Input 
            placeholder="请输入密码" 
            placeholderTextColor="#C1C1C1" 
            onChangeText={text=>this._text({name:'pwd',val:text})}
            secureTextEntry={true}
            keyboardType="default"
          />
        </Item>
        <Button full danger
          style={{marginTop:20,elevation:0,borderRadius:5,backgroundColor:'#EB3D00'}}
          onPress={()=>this.handleLogin()}
        >
          <Text
            style={{color:'#fff'}}
          >登录</Text>
        </Button>
      </Form>
      </View>
    )
  }
}