import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles/main.scss'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import './firebase/firebase'

const store = configureStore()
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
