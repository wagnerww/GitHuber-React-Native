import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Welcome from "./pages/Welcome";
import Repositories from "./pages/Repositories";
import Organization from "./pages/Organizatoin";

import { colors } from "./styles";

const Routes = (userLogged = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Welcome,
        User: createBottomTabNavigator(
          {
            Repositories,
            Organization
          },
          {
            tabBarOptions: {
              showIcon: true,
              showLabel: false,
              activeTintColor: colors.white,
              inactiveTintColor: colors.whiteTransparent,
              style: {
                backgroundColor: colors.secundary
              }
            }
          }
        )
      },
      {
        initialRouteName: userLogged ? "User" : "Welcome"
      }
    )
  );

export default Routes;
