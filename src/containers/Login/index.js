import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

@connect(store => store)
export default class Login extends Component {
  static propTypes = {
    appState: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="page login">
        Your login form here...
        {(this.props.appState.authenticated && !this.props.appState.authenticating) && <Redirect to="/" />}
      </div>
    )
  }
}
