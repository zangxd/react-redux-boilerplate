import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import { appState } from './appState'

const rootReducer = combineReducers({
  routing: routerReducer,
  appState
})

export default rootReducer
