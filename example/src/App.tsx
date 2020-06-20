import React from 'react'

import GreetingComponent from 'greeting-component-pkg'
import 'greeting-component-pkg/dist/index.css'

const App = () => {
  return <GreetingComponent text='World!' />
}

export default App
