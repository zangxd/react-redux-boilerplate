import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


export default function Protected(ComposedComponent){
  @connect(state => state)
  class AuthenticatedComponent extends Component {
    static propTypes = {
      appState: PropTypes.object.isRequired,
      location: PropTypes.object
    }

    render() {
      const { authenticated, authenticating } = this.props.appState.toObject()

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
