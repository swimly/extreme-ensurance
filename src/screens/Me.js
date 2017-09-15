/**
 * @Date:   2017-09-08T16:49:21+08:00
 * @Last modified time: 2017-09-15T11:29:48+08:00
 */

import React, { Component } from "react";
import {
  View,
  BackHandler,
  Image,
  TouchableNativeFeedback,
  Text
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
export default class MeScreen extends Component {
  static navigatorStyle = {
    navBarTextColor: "#fff",
    navBarBackgroundColor: "#EB3D00",
    statusBarColor: "#EB3D00"
  };
  static navigatorButtons = {
    rightButtons: [
      {
        icon: require("../assets/images/message.png"),
        id: "message"
      },
      {
        icon: require("../assets/images/setting.png"),
        id: "setting"
      }
    ]
  };
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBack);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBack);
  }
  onNavigatorEvent(event) {
    if (event.type === "NavBarButtonPress") {
      if (event.id == "message") {
        this._jump({
          screen: "app.MessageScreen",
          title: "消息",
          animationType: "slide-horizontal"
        });
      } else {
        this._jump({
          screen: "app.SettingScreen",
          title: "设置",
          animationType: "slide-horizontal"
        });
      }
    }
  }
  _jump(options) {
    this.props.navigator.push({
      screen: options.screen,
      title: options.title || "",
      animationType: "slide-horizontal"
    });
  }
  _modal (options) {
    this.props.navigator.showModal({
      screen: options.screen,
      title: options.title || "",
      animationType: "none"
    });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 100, backgroundColor: "#EB3D00" }}>
          <Grid>
            <Col
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 20
              }}
            >
              <Image
                source={require("../assets/images/face.png")}
                style={{ width: 60, height: 60 }}
              />
              <TouchableNativeFeedback
                onPress={() =>
                  this._jump({ screen: "app.LoginScreen", title: "用户登录" })}
              >
                <View>
                  <Text style={{ fontSize: 14, color: "#fff",margin:5}}>注册/登录</Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() =>
                  this._modal({ screen: "app.CodeModalComponent", title: "modal" })}
              >
                <Image
                  style={{ width: 20, aspectRatio: 1 }}
                  source={require("../assets/images/code.png")}
                />
              </TouchableNativeFeedback>
            </Col>
          </Grid>
        </View>
      </View>
    );
  }
}
