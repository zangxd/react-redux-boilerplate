import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ActiveLink from './activeLink'

export default class TopNav extends Component {
  static propTypes = {
    appState: PropTypes.object.isRequired
  }

  render() {
    const { authenticated } = this.props.appState

    return (
      <nav>
        <ActiveLink activeOnlyWhenExact={true} to="/">Home</ActiveLink>
        {authenticated && <ActiveLink to="/posts">Posts</ActiveLink>}
      </nav>
    )
  }

}
