import { StackNavigator } from "react-navigation"
import * as React from "react"
import { AppRegistry, Text } from "react-native"

import { HomeScreen, SignUpScreen } from "./components/components"

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Signup: { screen: SignUpScreen },
})

AppRegistry.registerComponent("asys", () => App)
