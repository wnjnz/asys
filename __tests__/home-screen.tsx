import "react-native"
import * as React from "react"

// Note: test renderer must be required after react-native.
import * as Renderer from "react-test-renderer"

import { HomeScreen } from "../src/components/components"

it("renders correctly", () => {
  const tree = Renderer.create(<HomeScreen />)
})
