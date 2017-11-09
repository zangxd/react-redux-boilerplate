import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import configureStore from './store/configureStore'
import App from './containers/app'

import './styles/main.scss'

const store = configureStore()

ReactDOM.render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./containers/app', () => {
    const App = require('./containers/app').default
    ReactDOM.render(
      <AppContainer>
        <App store={store} />
      </AppContainer>,
      document.getElementById('root'))
  })
}
