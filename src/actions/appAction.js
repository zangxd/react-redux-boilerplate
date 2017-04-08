import axios from 'axios'
import 'isomorphic-fetch'

export const setData = data => {
  return {
    type: 'SET_DATA',
    data
  }
}

export const setSingle = data => {
  return {
    type: 'SET_SINGLE',
    data
  }
}

export const clearItems = () => {
  return {
    type: 'SET_SINGLE'
  }
}


export const setAuthenticated = (authenticated) => {
  return {
    type: 'SET_AUTHENTICATED',
    authenticated
  }
}

export const setAuthenticating = (authenticating) => {
  return {
    type: 'SET_AUTHENTICATING',
    authenticating
  }
}

export const authenticate = (prevAuthenticated) =>
  dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(setAuthenticating(true))
      setTimeout(() => {
        dispatch(setAuthenticated(!prevAuthenticated))
        dispatch(setAuthenticating(false))
        resolve(prevAuthenticated)
      }, 0)
    })
  }

export const fetchData = (pathname) =>
  dispatch => {
    const dataUrl = 'https://jsonplaceholder.typicode.com'
    axios.get(`${dataUrl}${pathname}`).then((response) => {
      const data = response.data
      data.length > 0 ? dispatch(setData(data)): dispatch(setSingle(data))
    })
  }

export const setFollowShopList = testList => ({
  type: 'TEST_LIST',
  testList
})

const url = ''
export const getBook = () =>
  dispatch => {
    return fetch(url, {
      token: '7451adb27266b6faa02c8ca51a367076',
      credentials: 'include'
    }).then(response => {
      response.json().then(json => {
        dispatch(setFollowShopList(json.data.list))
      })

    })
  }
