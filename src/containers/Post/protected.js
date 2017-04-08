import React, { Component, PropTypes } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export default function Protected(ComposedComponent){
  @connect(store => store)
  class AuthenticatedComponent extends Component {
    static propTypes = {
      appState: PropTypes.object.isRequired,
      location: PropTypes.object
    }

    render() {
      const {authenticated, authenticating} = this.props.appState.toObject()

      return (
        <div className="authComponent">
          {authenticated ? <ComposedComponent {...this.props} /> :
          !authenticating && !authenticated ? <Redirect to={{pathname: '/login', state: { from: this.props.location }}} /> : null}
        </div>
      )
    }
  }
  return AuthenticatedComponent
}
