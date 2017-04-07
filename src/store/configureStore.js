import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from '../reducers/index'

const logger = createLogger({ collapsed: true })

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(
      thunk,
      logger
  )))

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
