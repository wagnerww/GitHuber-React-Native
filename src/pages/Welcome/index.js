import React from "react";

import { View, Text, StyleSheet } from "react-native";

// import styles from './styles';

const Welcome = () => (
  <View>
    <Text style={Styled.color}>Welcome</Text>
  </View>
);

const Styled = StyleSheet.create({
  color: {
    color: "#fff"
  }
});

export default Welcome;
