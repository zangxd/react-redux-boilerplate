import {createActions} from 'redux-actions'
import axios from 'axios'
import ActionTypes from './types'

export const {
  setData,
  setSingle,
  setAuthenticated,
  setAuthenticating,
  clearData
} = createActions(ActionTypes.SET_DATA, ActionTypes.SET_SINGLE, ActionTypes.SET_AUTHENTICATED, ActionTypes.SET_AUTHENTICATING, ActionTypes.CLEAR_DATA)

export const setAuthenticate = (prevAuthenticated) => dispatch => {
  return new Promise(resolve => {
    // dispatch(setAuthenticating(true))
    setTimeout(() => {
      dispatch(setAuthenticated(!prevAuthenticated))
      //dispatch(setAuthenticating(false))
      resolve(prevAuthenticated)
    }, 0)
  })
}

export const getData = (pathname) => dispatch => {
  const dataUrl = 'https://jsonplaceholder.typicode.com'
  axios.get(`${dataUrl}${pathname}`).then((response) => {
    const data = response.data
    data.length > 0
      ? dispatch(setData(data))
      : dispatch(setSingle(data))
  })
}
