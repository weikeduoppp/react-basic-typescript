import React from 'react'
import './App.css'
import Hello from './components/hello'

import store from './store'
import { Provider } from 'react-redux'
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Hello />
        </header>
      </div>
    </Provider>
  )
}

export default App
