import React from "react";

import { View, AsyncStorage, StyleSheet } from "react-native";

import { colors } from "../../styles";

import Header from "../../components/Header";

const Repositories = () => (
  <View>
    <Header title="Repositórios" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default Repositories;
