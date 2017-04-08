import React, { Component, PropTypes } from 'react'

import TopNav from './topNav'
import Button from '../../components/Button/index'

export default class TopBar extends Component {
	static propTypes = {
    appState: PropTypes.object.isRequired,
    authenticate: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    const { appState, authenticate } = this.props
    return (
      <div className="topbar">
        <TopNav appState={appState} />
        <Button onClick={authenticate} title={appState.authenticated ? 'Log out' : 'Sign in'} />
      </div>
    )
  }

}
