import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appAction from '../../actions/appAction'

import TopNav from './topNav'
import Button from '../../components/Button/index'

@connect(store => store,
dispatch => bindActionCreators({...appAction}, dispatch))
export default class TopBar extends Component {
	static propTypes = {
    appState: PropTypes.object.isRequired,
    authenticate: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.appState = this.props.appState
		this.authenticate = this.authenticate.bind(this)
  }

  authenticate(e) {
    if (e) e.preventDefault()
    this.props.authenticate()
  }

  render() {
    const { authenticated } = this.appState

    return (
      <div className="topbar">
        <TopNav store={this.props} />
        <Button onClick={this.authenticate} title={authenticated ? 'Log out' : 'Sign in'} />
      </div>
    )
  }

}
