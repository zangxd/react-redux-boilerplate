import React, { Component, PropTypes } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export default function Protected(props){
  console.log('Protected:', props)
  @connect(store => store)
  class AuthenticatedComponent extends Component {
    static propTypes = {
      appState: PropTypes.object.isRequired,
      location: PropTypes.string
    }

    constructor(props) {
      super(props)
      this.store = this.props.appState
    }

    render() {
      const {authenticated, authenticating} = this.store
      return (
        <div className="authComponent">
          {authenticated ? <Component {...this.props} /> :
          !authenticating && !authenticated ? <Redirect to={{pathname: '/login', state: { from: this.props.location }}} /> : null}
        </div>
      )
    }

  }
  return AuthenticatedComponent
}
