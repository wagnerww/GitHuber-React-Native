import React, { Component } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  ActivityIndicator
} from "react-native";

import Styles from "./styles";

import api from "../../services/api";

export default class Welcome extends Component {
  state = {
    username: "",
    loading: false,
    error: false
  };

  saveUser = async username => {
    await AsyncStorage.setItem("@GitHuber:username", username);
  };

  checkUser = async username => {
    const user = await api.get(`/users/${username}`);
    return user;
  };

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;
    this.setState({ loading: true });

    try {
      await this.checkUser(username);
      await this.saveUser(username);
      navigation.navigate("Repositories");
    } catch (error) {
      this.setState({ loading: false, error: true });
      console.tron.log("usuário inexistente");
    }
  };

  render() {
    const { username, loading, error } = this.state;

    return (
      <View style={Styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={Styles.title}>Bem-vindo</Text>
        <Text style={Styles.text}>
          Para continuar precisamos que você faça login no gitHub
        </Text>

        {error && <Text style={Styles.error}>Usuário inexistente</Text>}

        <View style={Styles.form}>
          <TextInput
            style={Styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
        </View>

        <TouchableOpacity style={Styles.button} onPress={this.signIn}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFf" />
          ) : (
            <Text style={Styles.buttonText}>Prosseguir</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
