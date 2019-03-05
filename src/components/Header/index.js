import React from "react";

import { View, Text, TouchableOpacity, StatusBar } from "react-native";

import styles from "./styles";

const Header = ({ title }) => (
  <View style={styles.content}>
    <StatusBar barStyle="dark-content" />
    <View style={styles.left} />
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity onPress={() => {}} />
  </View>
);

export default Header;
