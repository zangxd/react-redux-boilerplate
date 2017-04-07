import { fromJS } from 'immutable';

const initialState = {
  authenticated: false,
  authenticating: false,
  items: [],
  item: {}
}


export function appState(state = initialState, action) {
    switch (action.type) {
      case 'SET_AUTHENTICATE':
      new Promise((resolve, reject) => {
        state.authenticating = true
        setTimeout(() => {
          state.authenticated = !state.authenticated
          state.authenticating = false
          resolve(state.authenticated)
        }, 0)
        }).then(() => {
          return state
        })

      case 'SET_DATA':
          return fromJS(state).set('items', action.data).toJS()

      case 'SET_SINGLE':
          return fromJS(state).set('item', action.data).toJS()

      case 'CLEAR_ITEMS':
          return {
            ...state,
            items: [],
            item: {}
          }

      default:
          return state
    }
}
