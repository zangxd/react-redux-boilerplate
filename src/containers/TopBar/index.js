import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TopNav from './topNav'
import Button from '../../components/Button/index'

export default class TopBar extends Component {
  static propTypes = {
    appState: PropTypes.object.isRequired,
    setAuthenticate: PropTypes.func.isRequired
  }


  render() {
    const { appState, setAuthenticate } = this.props

    return (
      <div className="topbar">
        <TopNav appState={appState} />
        <Button onClick={setAuthenticate} title={appState.authenticated ? 'Log out' : 'Sign in'} />
      </div>
    )
  }
}
