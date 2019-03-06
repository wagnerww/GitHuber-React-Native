import { StyleSheet } from "react-native";
import { colors, metrics } from "../../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginTop: metrics.baseMargin,
    alignItems: "center",
    maxWidth: (metrics.screenWidth - 60) / 2 //20px na esq + 20 px na dir + 20px center = 60
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.darker,
    marginTop: metrics.baseMargin
  },
  avatar: {
    width: 50,
    height: 50
  }
});

export default styles;
