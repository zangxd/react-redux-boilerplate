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

export const authenticate = () => {
  return {
    type: 'SET_AUTHENTICATE'
  }
}

export const fetchData = (pathname) => {
  let {data} = axios.get(`https://jsonplaceholder.typicode.com${pathname}`)
  console.log('fetchData', data)
  data.length > 0 ? this.setData(data) : this.setSingle(data)
}

// axios.get('https://api.github.com/users/' + username)
//   .then(function(response){
//     console.log(response.data);
//     console.log(response.status);
//   });
