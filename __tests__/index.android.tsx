import 'react-native'
import * as React from 'react'

// Note: test renderer must be required after react-native.
import * as Renderer from 'react-test-renderer'

import App from '../src/index.android'

it('renders correctly', () => {
  const tree = Renderer.create(
    <App />
  )
})
