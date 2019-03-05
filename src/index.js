import React, { Component } from "react";

import { AsyncStorage } from "react-native";

import "./config/ReacttotronConfig";

import createNavigator from "./Routes";

export default class App extends Component {
  state = {
    userCheck: false,
    userLogged: false
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem("@GitHuber:username");

    this.setState({
      userCheck: true,
      userLogged: !!username
    });
  }

  render() {
    const { userCheck, userLogged } = this.state;

    if (!userCheck) return null;

    const Routes = createNavigator(userLogged);

    return <Routes />;
  }
}
