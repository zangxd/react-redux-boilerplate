import { fromJS, List } from 'immutable';

const initialState = fromJS({
    authenticated: false,
    authenticating: false,
    items: [],
    item: {}
  }
)

export function appState(state = initialState, action) {
    switch (action.type) {
      case 'SET_AUTHENTICATED':
        return state.set('authenticated', action.authenticated)

      case 'SET_AUTHENTICATING':
        return state.set('authenticating', action.authenticating)

      case 'SET_DATA':
        return state.set('items', List(action.data))

      case 'SET_SINGLE':
        return state.set('item', fromJS(action.data))

      case 'CLEAR_ITEMS':
        return initialState

      default:
          return state
    }
}
