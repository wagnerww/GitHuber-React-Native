import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default {
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 3,
  screenWidth: width < height ? width : height, //Permite trabalhar em modo Landscape
  screenHeight: width < height ? height : width
};
