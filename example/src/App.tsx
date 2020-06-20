import React from 'react'

import { ExampleComponent } from 'greeting-component-pkg'
import 'greeting-component-pkg/dist/index.css'

const App = () => {
  return <ExampleComponent text="world!" />
}

export default App
