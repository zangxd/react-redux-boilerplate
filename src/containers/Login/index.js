import React, { Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

@connect(state => ({
  appState: state.appState
}))
export default class Login extends Component {
  static propTypes = {
    appState: PropTypes.object.isRequired
  }

  render() {
    const appState = this.props.appState.toObject()

    return (
      <div className="page login">
        Your login form here...
        {(appState.authenticated && !appState.authenticating) && <Redirect to="/" />}
      </div>
    )
  }
}
