import { fromJS, List } from 'immutable';
import { handleActions } from 'redux-actions'
import ActionTypes from '../actions/types'

const initialState = fromJS({
  authenticated: false,
  authenticating: false,
  items: [],
  item: {}
}
)

export default handleActions({
  [ActionTypes.SET_AUTHENTICATED]: (state, action) =>
    state.merge({
      authenticated: action.payload
    }),
  [ActionTypes.SET_AUTHENTICATING]: (state, action) =>
    state.merge({
      authenticating: action.payload
    }),
  [ActionTypes.SET_DATA]: (state, action) =>
    state.set('items', List(action.payload)),
  [ActionTypes.SET_SINGLE]: (state, action) =>
    state.set('item', fromJS(action.payload)),
  [ActionTypes.SET_AUTHENTICATING]: state =>
    state.merge({
      items: [],
      item: {}
    }),
}, initialState)
